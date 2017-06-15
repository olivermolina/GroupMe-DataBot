const ACCESS_TOKEN = "99gxyd30En1qnevPHiAFUGDqoooKRiuEWttxBSBP";
const API = require('groupme').Stateless;
const BOT_ID = "4ae74446051b211c687eb564f0";
const GROUP_ID = 31634795;

import * as helpers from "./helpers";


export const postBotMessage = async function (req) {
    console.log("Request Payload");
    console.log(req.body);
    let sender_type = req.body.sender_type;
    let text = req.body.text;

    if ("bot" === sender_type) {
        console.log("No action..");
    }

    if ("user" === sender_type && ['Hi', 'Hello', 'hi', 'hello'].includes(text)) {
        let randomText = ["Hello to you!", "Hi!", "Hola!"];
        let id = Math.round(Math.random() * (randomText.length - 1));

        let opts = {
            picture_url: "",
        }
        API.Bots.post(ACCESS_TOKEN, BOT_ID, randomText[id], opts, function (err, ret) {
            if (!err) {
                console.log("Bot sent a hello text.");
            }
        });
    }

    if ("user" === sender_type && text.includes("/wordcount")) {
        let count = 0;
        const limit = 100;
        console.log("Get messages.");
        let messageTemp = await helpers.callGetMessages({group_id: GROUP_ID, token: ACCESS_TOKEN, before_id: 0});
        let messageCount = messageTemp.count;
        if (messageCount > limit) {
            let beforeId = messageTemp.messages[messageTemp.messages.length - 1].id;
            for (let i = limit; i < messageCount; i += limit) {
                console.log("Before ID: " + beforeId + " Count: " + i);
                messageTemp = i === limit ? messageTemp : await helpers.callGetMessages({
                    group_id: GROUP_ID,
                    token: ACCESS_TOKEN,
                    before_id: beforeId
                });
                beforeId = messageTemp.messages[messageTemp.messages.length - 1].id;
                for (let message of messageTemp) {
                    let text = message.text;
                    count += text.trim().split(/\s+/).length;
                }
            }
        }

        console.log(messageTemp.count);
        console.log(messageTemp.messages.length);
        console.log("Get messages done.");

        // let botMessage = "Total words of all time: " + count;
        // API.Bots.post(ACCESS_TOKEN, BOT_ID, botMessage, opts, function (err, ret) {
        //     if (!err) {
        //         console.log("Bot sent a word count reply.");
        //     }
        // });
    }
}



