const { makeBadge, ValidationError } = require('badge-maker')
const leetcodeCrawl = require('./leetcode')

/**
 * 
 * @param {string} badgeType
 * @param {string} userName
 */
const genBadge = async (badgeType, userName) => {
    let data = await leetcodeCrawl(userName)
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
    switch (badgeType) {
        case 'ranking': {
            let ranking = data.siteRanking > 1000 ? `${(data.siteRanking / 1000).toFixed(1)} K` : `${data.siteRanking}`
            return {
                label: 'Leetcode Ranking',
                message: ranking,
                labelColor: 'grey',
                color: 'yellow',
                // style: 'plastic',
                // link:`https://leetcode-cn.com/u/${data.username}`
            }
        }
        case 'ratio': {
            let submissionData = data.submissionProgress
            let ratioData = `${submissionData.acTotal} | ${submissionData.questionTotal}`
            return {
                label: 'Leetcode Solved',
                message: ratioData,
                labelColor: 'grey',
                color: 'yellow',
                // style: 'plastic',
            }
        }
        case 'rate': {
            let submissionData = data.submissionProgress
            let ratioData = `${(submissionData.acTotal / submissionData.questionTotal).toFixed(2)} %`
            return {
                label: 'Leetcode Solved',
                message: ratioData,
                labelColor: 'grey',
                color: 'yellow',
                // style: 'plastic',
            }
        }
        case 'localContest': {
            let contestRanking = data.profile.ranking
            let contestData = `${(contestRanking.currentLocalRanking /contestRanking.totalLocalUsers).toFixed(2)} %`
            return {
                label: 'Leetcode Contest',
                message: contestData,
                labelColor: 'grey',
                color: 'yellow',
            }
        }
        case 'globalContest': {
            let contestRanking = data.profile.ranking
            let contestData = `${(contestRanking.currentGlobalRanking / contestRanking.totalGlobalUsers).toFixed(2)} %`
            return {
                label: 'Leetcode Contest',
                message: contestData,
                labelColor: 'grey',
                color: 'yellow',
            }
        }
    }

}

module.exports = genBadge