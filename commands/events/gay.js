const config = require('../../config.json');
const { meme } = require('memejs');
const { MessageAttachment } = require('discord.js');


exports.run = (client, message, args) => {
    
    const allowed = message.channel.nsfw
    if(allowed == true) {
        const gay = [
            "softies" ,
            "tinydick",
            "GaybrosGoneWild",
            "MassiveCock"
        ]


         var  getGay = gay[Math.floor(Math.random() * gay.length)];

        meme(getGay,function(err, data) {
            if (err) return console.error(err);
            console.log(data);
            const attachment = new MessageAttachment(data.url);
            message.channel.send(attachment);
        });
    }
    else {
        message.channel.send('is not nsfw channel B R U H ');
    }

}
exports.help = {
    name: 'gay'
}
