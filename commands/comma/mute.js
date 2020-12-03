const config = require('../../config.json');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR']))
    message.channel.send("nie posiadasz permisji do tej komendy koleszko");
else {
    let member = message.mentions.members.first();
    if(member) {
        if(member.hasPermission(['ADMINISTRATOR']) ){
            message.channel.send("tego użytkownika nie można wyciszyć");
        }
        if(member) {
            if(!member.hasPermission('ADMINISTRATOR')) {
            let mutedRole = message.guild.roles.cache.find(role => role.name === 'muted');
            
            if(mutedRole) {
                member.roles.add(mutedRole);
                message.channel.send("użytkownik został wyciszony!");
            }
            if(!mutedRole) {
                message.channel.send("nie znaleziono roli muted");
            }

        }
    }
    if(!member) {
        message.channel.send("nie znaleziono użytkownika");
    }
}
    }
}


    
exports.help = {
    name: 'mute'
}