const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://terbo.herokuapp.com',
    token = process.env.TOKEN || '832140817:AAFZJxqITBiXcby0FVGQ9KEtNkik3yIFDAo',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on("message", (msg,) => {
 
  const chatId = msg.chat.id 
  if(msg.text=="Hai" || msg.text=="Hello"){
  bot.sendMessage(chatId, "hello");
  }
   else if(msg.text=="How are you?" || msg.text=="How r u?"){
       bot.sendMessage(chatId,"Ha HA fine...");
   }
   else if (msg.text=="Entha parupadi"){ 
        
   bot.sendMessage(chatId,"veruthe rest eduka");
   }
   
    else{
       bot.sendMessage(chatId,"poda");
   }
});
