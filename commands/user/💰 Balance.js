/*CMD
  command: ๐ฐ Balance
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

Bot.sendMessage("๐ฎ Name : *["+user.first_name+" "+user.last_name+"*](tg://user?id="+user.telegramid+")\n\n๐ฐ Balance : *"+balance+" "+currency+"*\n\n๐คต User ID : *"+user.telegramid+"*\n\n๐ซ Refferals : *"+Libs.ReferralLib.getRefCount()+" Users*\n\n๐จโ๐ฉโ๐งโ๐ฆ More :  *Refer And Earn More*")
