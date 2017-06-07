const request = require('request');
const GROUP_ME_BASE_URL = "https://api.groupme.com/v3/";

export const getGroupDetails = () => {
    return async(_, args) => {
        let data = JSON.parse(await callGroupMe("groups", args.token));
        let response = data.response[0];
        let group = {
            id: response.id,
            group_id: response.group_id,
            name: response.name,
            members: response.members
        };
        return group;
    }
}

export const callGroupMe = async (subUri, token) => {
    console.log("Calling GroupMe API...");

    let uri = GROUP_ME_BASE_URL + subUri + "?token=" + token;

    console.log(uri);

    return new Promise(function (resolve, reject) { //can't get 'await' to work with 'request'
        request({
            url: uri,
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body || response)
            } else {
                reject("Error " + (String(response.statusCode) || String(error)))
            }
        })
    });
};
