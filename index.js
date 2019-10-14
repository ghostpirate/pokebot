const TelegramBot = require('node-telegram-bot-api'); 
const token = 'yout telegram token';
const bot = new TelegramBot(token, {polling: true});
    
bot.on('message', (msg) => {
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
   else if (msg.text=="aaraa"){
       bot.sendMessage(chatId,"njan malamfootham");
   }
    else{
       bot.sendMessage(chatId,"manasilayilla");
   }
});
