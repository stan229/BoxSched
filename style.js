/**
 * Created by stan229 on 11/5/15.
 */
var React = require('react-native');

var {
        StyleSheet,
        } = React;

var styles = StyleSheet.create({
    loadingContainer : {
        backgroundColor : '#F44336',
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center'
    },
    loadingText      : {
        color    : 'white',
        fontSize : 24
    },
    spinner          : {
        marginLeft   : -25,
        marginBottom : 50
    },

    mainContainer : {
        //backgroundColor : '#FAFAFA',
        backgroundColor : '#F44336',
        flex            : 1
    },
    header        : {
        backgroundColor : '#F44336',
        marginTop       : 20,
        height          : 44,
        alignItems      : 'center',
        justifyContent  : 'center'
    },
    headerText    : {
        color    : 'white',
        fontSize : 17
    },
    body : {
        flex : 1,
        //backgroundColor : '#cccccc'
    },

    event : {
        //margin : 10,
        //backgroundColor :'#FFFFFF'
        backgroundColor : '#cccccc'
    },
    eventDate : {
        //textAlign : 'center',
        backgroundColor : '#FFCDD2',

        //backgroundColor : '#FF5722',
        color: '#212121',
        //color: 'white',
        padding: 8,
        paddingLeft : 30,

        shadowColor : 'rgba(211,47,47,.25)',
        shadowOpacity : 0.8,
        shadowRadius : 0.5,
        shadowOffset : {
            height : 2,
            width : 0
        }
        //marginBottom : 10
    },
    card : {
        padding: 10,
        margin : 10,
        backgroundColor : '#FAFAFA',
        shadowColor : 'rgba(0,0,0,.23)',
        shadowOpacity : 0.8,
        shadowRadius : 3,
        shadowOffset : {
            height : 5,
            width : 0
        }

        //borderBottomColor:'#B6B6B6',
        //borderBottomWidth : 1,
        //backgroundColor :'#FFFFFF'
    },
    lastCard : {
        //backgroundColor :'#FFFFFF',
        padding: 10,
        backgroundColor : '#FAFAFA',
    },
    cardHeader : {
        alignItems : 'stretch',
        flexDirection : 'row',
        padding: 10,
        backgroundColor : '#FFCDD2',
        //backgroundColor : '#FF5722'
    },
    showMoreSymbol : {
        textAlign : 'right',
        fontWeight : '900',
        color : '#B6B6B6',
        flex : 1
    },

    channelView : {
    },
    cardSubText : {
        //flex : 1,
        //marginLeft : 20,
        fontSize : 12,
        color: '#212121'
    },
    fightItem : {
        flexDirection : 'row',
        //alignItems : 'stretch'
    },

    subView : {
        flexDirection : 'row',
        alignItems : 'flex-start'
    },
    fight : {
        //borderBottomColor:'#B6B6B6',
        //borderBottomWidth : 1,
        padding: 10,
        flex : 1,
        flexDirection : 'row',

    },
    titleFight : {
        width : 30,
        marginLeft : 20
        //flex : 1
    },
    opponent : {

    }


});


module.exports = styles;