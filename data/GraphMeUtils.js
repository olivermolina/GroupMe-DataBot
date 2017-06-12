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

export const postBotMesasge = function (req) {
    let opts = {
        picture_url: "",
    }

    console.log(req.body);

    // API.Bots.post(ACCESS_TOKEN, BOT_ID, "Hello, this is an automated reply again!",opts, function (err, ret) {
    //     if (!err) {
    //         console.log("Bot message has been sent");
    //     }
    // });

}


