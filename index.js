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

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if(msg.text=="hi"){
        bot.sendMessage(chatId,'hello')}
    if(msg.text == "hello"){
        bot.sendMessage(chatId,'hi')}
    bot.sendMessage(chatId, 'pikka pe')
})
