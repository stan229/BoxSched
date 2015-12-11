/**
 * Created by stan229 on 11/11/15.
 */
var React = require('react-native'),
    styles = require('./../style'),
    Icon = require('react-native-vector-icons/MaterialIcons');

var {
    View,
    Text
    } = React;


class Fight extends React.Component {
    render () {
        var fight = this.props.fight,
            fighters = fight.fighters,
            championship = fight.titleFight && <View style={styles.titleFight}><Icon style={{width:20}} name="stars" size={20} color='#FF5722'/></View>;

        return (
            <View style={styles.fight}>
                <Text style={styles.opponent}>{fighters[0]}</Text>
                <Text style={styles.vs}> vs. </Text>
                <Text style={styles.opponent}>{fighters[1]}</Text>
            </View>
        )
    }
}

module.exports = Fight;




