const { makeBadge, ValidationError } = require('badge-maker')
const leetcodeCrawl=require('./leetcode')

/**
 * 
 * @param {string} badgeType
 * @param {string} userName
 */
const genBadge = async (badgeType,userName) => {
    let data=await leetcodeCrawl(userName)
    let dataJson = JSON.parse(data).data.userProfilePublicProfile
    let format = genFmt(badgeType, dataJson)
    let svg = makeBadge(format)
    return svg
}

/**
 * 
 * @param {string} badgeType
 * @param {object} data 
 * @returns {object} format
 */
const genFmt = (badgeType, data) => {
    switch (badgeType){
        case 'ranking':{
            return {
                label:'Leetcode ranking',
                message: data.siteRanking.toString(),
                labelColor:'grey',
                color:'yellow',
                style:'plastic',
               // link:`https://leetcode-cn.com/u/${data.username}`
            }
        }
        case 'ratio':{

        }
        case 'skills':{

        }
    }

}

module.exports = genBadge