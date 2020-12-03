const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();

const modules = ['events', 'jokes', 'comma'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});
client.on('message', msg => {
    client.user.setActivity('k! is prefix', {type: 'WATCHING'});
    if(msg.author.bot) return;
    if(msg.content.indexOf(config.prefix) !== 0) return;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if(!cmd) return;

    cmd.run(client, msg, args);
})

client.commands = new Discord.Collection();

modules.forEach(c => {
    fs.readdir(`./commands/${c}/`, (err, files) => {
        if(err) throw err;
        console.log(`[CommandLogs] Loaded ${files.length} commands of module ${c}`);

        files.forEach(f => {
            const props = require(`./commands/${c}/${f}`);
            client.commands.set(props.help.name, props);
        });
    });
});

client.login(config.token);