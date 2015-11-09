/**
 * Created by stan229 on 11/3/15.
 */

var cheerio = require('cheerio');

var SCHED_URL = 'http://espn.go.com/boxing/story/_/id/12508267/boxing-fight-schedule';

class Schedule {
    loadSchedule(callback) {
        return fetch(SCHED_URL).then((response) => response.text()).then(responseData => this.parseContent(responseData)).then(parsedResponse => callback(parsedResponse)).done();
    }

    parseContent(responseData) {
        var $            = cheerio.load(responseData),
            children     = $('.article-body').children(),
            length       = children.length,
            scheduleData = [],
            monthData,
            event,
            childNode,
            childNodeText,
            childNodeChildren,
            childNodeRawChildrenLength,
            i;

        for (i = 0; i < length; i++) {
            childNode = $(children[i]);

            if (childNode[0].name === 'h2') {
                monthData && scheduleData.push(monthData);
                event && monthData.events.push(event);

                event = null;

                monthData = {
                    month  : childNode.text(),
                    events : []
                };
            }

            if (childNode[0].name === 'p') {
                childNodeChildren = childNode.children();
                childNodeRawChildrenLength = childNode[0].children.length;

                if (childNodeRawChildrenLength === 1) {
                    event && monthData.events.push(event);
                    event = {
                        date  : $(childNodeChildren[0]).text(),
                        cards : []
                    };
                }

                if (childNodeRawChildrenLength > 1) {
                    childNodeText = childNode.text();
                    event.cards.push(this.parseCard(childNodeText, childNodeChildren));
                }


            }
        }
        monthData.events.push(event);
        scheduleData.push(monthData);

        return scheduleData;
    }

    parseCard(text, childNodeChildren) {
        var location       = text.substring(0, text.indexOf(':')),
            openParenIndex = location.indexOf('('),
            channel        = openParenIndex > -1 && location.substring(openParenIndex + 1, location.length - 1),
            location       = location.substr(0, openParenIndex > -1 ? openParenIndex - 1 : location.length),
            fightsText     = text.substr(location.length + 2 + (channel && channel.length+3)),
            fightsSplit    = fightsText.split('; '),
            fightsLength   = fightsSplit.length,
            fights         = [],
            fight,
            fightText,
            i;

        for (i = 0; i < fightsLength; i++) {
            fightText = fightsSplit[i];

            fight = {
                text       : fightText,
                titleFight : this.isChampionFight(fightText, childNodeChildren)
            }
            fights.push(fight);
        }

        return {
            location : location,
            channel  : channel,
            fights   : fights
        }
    }

    isChampionFight(fightText, childNodeChildren) {
        var length = childNodeChildren.length,
            i;

        for (i = 0; i < length; i++) {
            if (childNodeChildren[i].children[0].data === fightText) {
                return true;
            }
        }

        return false;

    }
}

module.exports = Schedule;