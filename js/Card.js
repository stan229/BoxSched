/**
 * Created by stan229 on 11/6/15.
 */
var React = require('react-native'),
    styles = require('./../style'),
    Fight = require('./Fight'),
    Icon = require('react-native-vector-icons/MaterialIcons');

var {
    View,
    Text,
    TouchableOpacity,
    Animated
    } = React;

class Card extends React.Component {
    constructor(opts) {
        super(opts);
        this.state = {
            showRemainingFights : false
        };
    }

    showRemainingFights() {
        this.setState({
            showRemainingFights : true
        });
    }

    hideRemainingFights() {
        this.setState({
            showRemainingFights : false
        });
    }
    componentDidMount() {

    }
    render() {
        var card         = this.props.card,
            state        = this.state,
            channel      = card.channel,
            cardChannel  = channel &&
                <Text style={styles.cardSubText}> on {channel}</Text>,
            //bodyStyle    = this.props.isLast ? styles.lastCard : styles.card,
            bodyStyle    =  styles.card,
            fightsData   = card.fights,
            fightsLength = fightsData.length,
            fights;

        fights = fightsData.map((fight, idx) => {

            if(fightsLength === 1) {
                return <Fight fight={fight} key={idx}></Fight>
            }

            if(!state.showRemainingFights) {
                if (idx === 0) {
                    return (
                        <View style={styles.fightItem}>
                            <Fight fight={fight} key={idx}></Fight>
                            <TouchableOpacity onPress={() => this.showRemainingFights()}>
                                <Icon name="expand-more" size={30} color="#727272"/>
                            </TouchableOpacity>
                        </View>
                    );
                }
            } else {
                if(idx === 0) {
                    return (
                        <View style={styles.fightItem}>
                            <Fight fight={fight} key={idx}></Fight>
                            <TouchableOpacity onPress={() => this.hideRemainingFights()}>
                                <Icon name="expand-less" size={30} color="#727272"/>
                            </TouchableOpacity>
                        </View>
                    );
                } else {
                    return <Fight fight={fight} key={idx}></Fight>
                }

            }
        });

        return (
            <View style={bodyStyle}>


                <View style={styles.subView}>
                    <Text style={styles.cardSubText}>{this.props.card.location}</Text>
                    {cardChannel}
                </View>

                {fights}
            </View>
        )
    }
}

module.exports = Card;