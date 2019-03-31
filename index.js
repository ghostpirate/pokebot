const TelegramBot = require('node-telegram-bot-api');
const request = require('request')

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://pokemnbot.herokuapp.com',
    token = process.env.TOKEN || '876379827:AAEp3CyGAd0QQI7PJKzCXjBGN_PMo8mVFak',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    console.log(msg.text)

    request("https://pokeapi.co/api/v2/pokemon/" + msg.text,function(err,body,response){

        let data = JSON.parse(response)
        for(let i =0; i < data.ablities.length; i++) {

            bot.sendMessage(chatId,data.ablities[i].name)
        })

    })
