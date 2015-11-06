/**
 * Created by stan229 on 11/6/15.
 */
var React = require('react-native');

var {
    View,
    Text
    } = React;

class Card extends React.Component {
    render() {

        return (

            <View>
                <Text>{this.props.card.location}</Text>

                {(() => {
                     return this.props.card.channel && <Text>{this.props.card.channel}</Text>
                })()}
                
                <Text>{this.props.card.fights}</Text>
            </View>
        )
    }
}

module.exports = Card;