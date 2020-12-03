const config = require('../../config.json');
const { meme } = require('memejs');
const { MessageAttachment } = require('discord.js');

exports.run = (client, message, args) => {
    const allowed = message.channel.nsfw
    if(allowed == false) {
   
        const wallpapers = [
            "wallpaper"
        ]


         var  getwp = wallpapers[Math.floor(Math.random() * wallpapers.length)];

        meme(getwp,function(err, data) {
            if (err) return console.error(err);
            console.log(data);
            message.channel.send(data.url);
        });
    }
    else {
        message.channel.send("nie wysyłam takich rzeczy na nsfw,jeśli kanał nie jest nsfw wyłącz i włącz opcje nsfw powinno zadziałać")
    }
}




exports.help = {
    name: 'wallpaper',

}
