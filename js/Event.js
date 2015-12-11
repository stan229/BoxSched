/**
 * Created by stan229 on 11/6/15.
 */

var React = require('react-native'),
    Card  = require('./Card'),
    styles = require('./../style');

var {
    View,
    Text,

    } = React;


class Event extends React.Component {
    render() {
        //var cards = this.props.eventData.cards.map((card,idx) => );
        return (
            <View style={styles.event}>
                <Text style={styles.eventDate}>{this.props.eventData.date}</Text>
                {this.props.eventData.cards.map((card, idx) => <Card key={card.location+card.fights.length}
                                                                     isLast={idx===this.props.eventData.cards.length-1}
                                                                     card={card}/>)}
            </View>
        )
    }
}

module.exports = Event;