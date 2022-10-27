/*CMD
  command: 💰 Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: user

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var currency = Bot.getProperty ("botdata"). currency;
var balance = User.getProperty ("userdata"). balance;

Bot.sendMessage("👮 Name : *["+user.first_name+" "+user.last_name+"*](tg://user?id="+user.telegramid+")\n\n💰 Balance : *"+balance+" "+currency+"*\n\n🤵 User ID : *"+user.telegramid+"*\n\n👫 Refferals : *"+Libs.ReferralLib.getRefCount()+" Users*\n\n👨‍👩‍👧‍👦 More :  *Refer And Earn More*")
