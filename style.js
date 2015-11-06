/**
 * Created by stan229 on 11/5/15.
 */
var React = require('react-native');

var {
        StyleSheet,
        } = React;

var styles = StyleSheet.create({
    loadingContainer : {
        backgroundColor : '#D32F2F',
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
        backgroundColor : '#FAFAFA',
        flex            : 1
    },
    header        : {
        backgroundColor : '#D32F2F',
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
        flex : 1
    }

});


module.exports = styles;