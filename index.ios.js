/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React    = require('react-native'),
    Schedule = require('./js/Schedule'),
    styles   = require('./style'),
    SpinKit  = require('react-native-spinkit'),
    Event    = require('./js/Event');


var {
    AppRegistry,
    Text,
    View,
    ScrollView,
    } = React;

class BoxSched extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.bindMethods();
    }

    bindMethods() {
        if (!this.bindableMethods) {
            return;
        }

        for (var methodName in this.bindableMethods) {
            this[methodName] = this.bindableMethods[methodName].bind(this);
        }
    }

    getInitialState() {
        return {};
    }

    componentDidMount() {
        new Schedule().loadSchedule((parsedResponse) => this.setState({
            scheduleData : parsedResponse
        }));
    }

    render() {
        if (this.state.scheduleData) {
            return this.renderMainView();
        } else {
            return this.renderLoadingView();
        }

    }

    renderLoadingView() {
        return (
            <View style={styles.loadingContainer}>
                <SpinKit type="Circle" isVisible={this.state.scheduleData} style={styles.spinner} size={100}
                         color="#FFFFFF"></SpinKit>
                <Text style={styles.loadingText}>Loading</Text>
            </View>
        )
    }

    renderMainView() {
        let scheduleData = this.state.scheduleData;

        this.state.activeMonth = scheduleData[0].month;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.toTitleCase(this.state.activeMonth)}</Text>
                </View>
                <ScrollView styles={styles.body} onScroll={this.handleScroll}>
                    {this.state.scheduleData.map((monthData) => monthData.events.map((eventData) => <Event eventData={eventData}/>))}
                </ScrollView>
            </View>
        )
    }

    handleScroll(event) {
        console.log('scroll', event);
    }
    toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }


}
//
//var BoxSched = React.createClass({
//    render : function () {
//        return (
//            <View style={styles.container}>
//                <Text style={styles.welcome}>
//                    Welcome to React Native!
//                </Text>
//                <Text style={styles.instructions}>
//                    To get started, edit index.ios.js
//                </Text>
//                <Text style={styles.instructions}>
//                    Press Cmd+R to reload,{'\n'}
//                    Cmd+D or shake for dev menu
//                </Text>
//            </View>
//        );
//    }
//});


AppRegistry.registerComponent('BoxSched', () => BoxSched);
