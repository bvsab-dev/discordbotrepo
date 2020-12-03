const config = require('../../config.json');
const old = require('../../old.json');

exports.run = (client, message, args) => { 

    const allowed = message.channel.nsfw
    if(allowed === false) {

        var random = old[Math.floor(Math.random() * old.length)];//losowanie zartu
        
        message.channel.send(random);//wysylanie zartu
    }
    else {
        message.channel.send("na kanałach nsfw komenda nie zadziała mordo, jeśli kanał nie jest nsfw wyłącz i włącz opcje nsfw powinno zadziałać")
    }

}
exports.help = {
    name: 'old'
}