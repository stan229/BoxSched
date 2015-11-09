/**
 * Created by stan229 on 11/6/15.
 */

var React = require('react-native'),
    Card  = require('./Card');

var {
    View,
    Text,

    } = React;


class Event extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.eventData.date}</Text>
                {this.props.eventData.cards.map((card) => <Card key={card.location+card.fights.length} card={card}/>)}
            </View>
        )
    }
}

module.exports = Event;