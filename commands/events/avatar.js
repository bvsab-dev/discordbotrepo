const config = require('../../config.json');


exports.run = (client, message, args) => {
    const allowed = message.channel.nsfw
    if(allowed == false) {
        const member = message.mentions.members.first();
        if(member) {
            message.channel.send(member.user.displayAvatarURL({ format: 'png' ,dynamic: true, size: 2048 }));
        }
        if(!member) {
            message.channel.send(message.author.displayAvatarURL({ format: 'png' ,dynamic: true, size: 2048 }));
        }
    }
    if(allowed==true) {
        message.channel.send("nie wysyłam takich rzeczy na nsfw,jeśli kanał nie jest nsfw wyłącz i włącz opcje nsfw powinno zadziałać");
    }
}

exports.help = {
    name: 'avatar',
};