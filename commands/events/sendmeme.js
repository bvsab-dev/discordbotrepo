const config = require('../../config.json');
const { meme } = require('memejs');
const { MessageAttachment } = require('discord.js');
exports.run = (client, message, args) => {
  const allowed = message.channel.nsfw
    if(allowed == false) {
    const memes = [
        "dankmemes",
        "MemeEconomy",
        "195",
        "BlackPeopleTwitter",
        "wholesomememes",
        "shittyadvicedanimals",
        "AdviceAnimals",//tablica z subredditami 
        "coaxedintoasnafu",
        "terriblefacebookmemes",
        "PhonesAreBad",
        "ComedyCemetery",
        "oldpeoplefacebook",
        "forwardsfromgrandma",
        "lewronggeneration"
      ];
      
     var  getmeme = memes[Math.floor(Math.random() * memes.length)];//losuje randomowego subreddita z którego później wyśle mem
    meme(getmeme,function(err, data) {
        if (err) return console.error(err);
        console.log(data);
        const attachment = new MessageAttachment(data.url);
        message.channel.send(`from ${data.subreddit}` , attachment);
      });
    } 
    else {
      message.channel.send("Na kanałach nsfw nie wysyłam meme bo nie wolno,jeśli kanał nie jest nsfw wyłącz i włącz opcje nsfw powinno zadziałać")
    }
  }
exports.help = {
  name: 'sendmeme',
  
}

