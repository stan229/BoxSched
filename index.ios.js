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
    ListView
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
        return {
            activeMonth        : undefined,
            //scheduleData       : undefined,
            //scheduleDataSource : undefined
        };
    }

    componentDidMount() {
        new Schedule().loadSchedule((scheduleData) => this.setState({
            activeMonth  : scheduleData[0].month,
            scheduleData : scheduleData,
            scheduleDataSource : new ListView.DataSource({
                rowHasChanged : (r1, r2) => r1 !== r2
            }).cloneWithRows(scheduleData)
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
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.toTitleCase(this.state.activeMonth)}</Text>
                </View>
                <ListView styles={styles.body}
                          dataSource={this.state.scheduleDataSource}
                          renderRow={this.onRenderRow}
                          onChangeVisibleRows={(visibleRows, changedRows) => this.onChangeVisibleRows(visibleRows, changedRows)}>
                </ListView>
            </View>
        );
    }

    onRenderRow(rowData) {
        return (
            <View key="rowData.month">
                {rowData.events.map((eventData, idx) => <Event key={eventData.date+idx} eventData={eventData}/>)}
            </View>
        );
    }
    onChangeVisibleRows(visibleRows, changedRows) {
        var visibleRowsArr = Object.keys(visibleRows.s1);

        this.setState({
            activeMonth : this.state.scheduleData[visibleRowsArr[visibleRowsArr.length - 1]].month
        });
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    
}

AppRegistry.registerComponent('BoxSched', () => BoxSched);
