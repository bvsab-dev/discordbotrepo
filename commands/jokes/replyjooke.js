const config = require('../../config.json');

exports.run = (client, message, args) => { 

    if(message.content === "twoja stara") return;
        message.channel.send('Nie bo twoja')
}
exports.help = {
    name: 'reply'
}
