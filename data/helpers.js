const request = require('request');
const GROUP_ME_BASE_URL = "https://api.groupme.com/v3/";

export const getGroupDetails = () => {
    return async (_, args) => {
        console.log("Function: getGroupDetails");
        let data = JSON.parse(await callGroupMe("groups", args.token, "GET", {}));
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

export const getBots = () => {
    return async (_, args) => {
        console.log("Function: getBots");
        let data = JSON.parse(await callGroupMe("bots", args.token, "GET", {}));
        let response = data.response;
        return response;
    }
}

export const getMessages = () => {
    return async (_, args) => {
        console.log("Function: getMessages");
        let data = JSON.parse(await callGroupMe("groups/" + args.group_id + "/messages", args.token, "GET", {}));
        let response = data.response;
        return response;
    }
}


export const sendBotMessage = () => {
    return async (_, args) => {
        console.log("Function: sendBotMessage");
        let formData = {
            bot_id: args.bot_id,
            text: args.text
        };
        let data = await callGroupMe("bots/post", args.token, "POST", formData);

        let message = {
            id: 1,
            bot_id: args.bot_id,
            text: args.text
        };


        return message;
    }
}

export const callGroupMe = async (subUri, token, request_type, formData) => {
    console.log("Calling GroupMe API...");

    let uri = GROUP_ME_BASE_URL + subUri + "?token=" + token;
    let requestObject = {
        url: uri,
        method: request_type,
    }
    if (request_type === "POST") {
        console.log(formData);
        requestObject.form = formData;
        requestObject.json = true;
    }

    console.log(requestObject);

    return new Promise(function (resolve, reject) { //can't get 'await' to work with 'request'
        request(requestObject, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body || response);
            } else {
                console.log("Response:" + response);
                console.log("Error: " + error);
                resolve({error: "Empty Response"});
            }
        })
    });
};
