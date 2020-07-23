const superagent = require('superagent')


/**
 * 
 *@param {string} username
 @returns {Promise} userInfo
 * 
 */
const leetcodeCrawl = (username) => {
    return new Promise((resolve, reject) => {
        superagent.post('https://leetcode-cn.com/graphql/')
            .send(
                { "operationName": "userPublicProfile", "variables": { "userSlug": username }, "query": "query userPublicProfile($userSlug: String!) {\n  userProfilePublicProfile(userSlug: $userSlug) {\n    username\n    haveFollowed\n    siteRanking\n    profile {\n   skillTags\n      contestCount\n   ranking {\n   currentLocalRanking\n        currentGlobalRanking\n        currentRating\n              totalLocalUsers\n        totalGlobalUsers\n      }\n      skillSet {\n        langLevels {\n          langName\n          langVerboseName\n          level\n        }\n        topicAreaScores {\n          score\n          topicArea {\n            name\n            slug\n    }\n }\n }\n     }\n    educationRecordList {\n      unverifiedOrganizationName\n      }\n    occupationRecordList {\n      unverifiedOrganizationName\n      jobTitle\n      }\n    submissionProgress {\n      totalSubmissions\n      waSubmissions\n      acSubmissions\n      reSubmissions\n      otherSubmissions\n      acTotal\n      questionTotal\n    }\n   }\n}\n" }
            )
            .end((err, res) => {
                if (err) {
                    reject(err)
                }

                resolve(res.text)


            })

    })
}
module.exports = leetcodeCrawl

