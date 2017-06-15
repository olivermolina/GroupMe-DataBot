const ACCESS_TOKEN = "99gxyd30En1qnevPHiAFUGDqoooKRiuEWttxBSBP";
const API = require('groupme').Stateless;
const BOT_ID = "4ae74446051b211c687eb564f0";

export const testGraphMe = function () {
    API.Users.me(ACCESS_TOKEN, function (err, ret) {
        if (!err) {
            console.log("Your user id is", ret.id, "and your name is", ret.name);
        }
    });

}

export const postBotMessage = function (req) {
    let opts = {
        picture_url: "",
    }

    let sender_type = req.body.sender_type;
    let text = req.body.text;

    if ("bot" === sender_type) {
        console.log("No action..");
    }

    if ("user" === sender_type && ['Hi', 'Hello', 'hi', 'hello'].includes(text)) {
        let randomText = ["Hello to you!", "Hi!", "Hola!"];
        let id = Math.round(Math.random() * (randomText.length - 1));
        API.Bots.post(ACCESS_TOKEN, BOT_ID, randomText[id], opts, function (err, ret) {
            if (!err) {
                console.log("Bot sent a hello text.");
            }
        });
    }
}


