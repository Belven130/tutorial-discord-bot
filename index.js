const Discord = require('discord.js');
const client = new Discord.Client();
const db = require ('quick.db')
const prefix = '!';
const fs = require('fs');

client.once('ready', () => {
  console.log("I'm ready!")
})

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
  client.on('message', message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      if(command === 'ping'){
          message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
      } else if(command == 'embed'){
        client.commands.get('embed').execute(message,args,Discord)
      } else if(command == 'kick'){
        client.commands.get('kick').execute(message,args)
      } else if(command == 'ban'){
        client.commands.get('ban').execute(message,args)
      } else if(command == 'meme'){
        client.commands.get('meme').execute(message,args)
      } else if(command == 'cat'){
        client.commands.get('cat').execute(message,args,Discord)
      } else if(command == 'botinfo'){
        client.commands.get('botinfo').run(client,message,args,Discord)
      } else if(command == 'lock'){
        client.commands.get('lock').execute(message,args)
      } else if(command == 'unlock'){
        client.commands.get('unlock').execute(message,args)
      } else if(command == 'react'){
        client.commands.get('react').execute(message,args)
      } else if(command == 'clear'){
        client.commands.get('clear').run(message,args)
      } else if(command == 'play'){
        client.commands.get('play').execute(message,args,Discord)
      } else if(command == 'leave'){
        client.commands.get('leave').execute(message,args,Discord)
      }
    
  })
  
client.login('token')//do not show it to anyone
