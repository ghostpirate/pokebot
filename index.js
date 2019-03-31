const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://pikachu-1.herokuapp.com",
    token = process.env.TOKEN || '840524827:AAFrTvc5ifZ2re6NdIwrMNUrrtLaGjEeS8A',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
