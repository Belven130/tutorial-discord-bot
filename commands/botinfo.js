const moment = require('moment');
require('moment-duration-format');

module.exports = {
  name:'botinfo',
  description:'get the info of this bot',
  async run (client,message,args,Discord) {
    let duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")
    let embed = new Discord.MessageEmbed()
    .setTitle('Information of this bot')
    .setDescription('My prefix is `!`')
    .addFields(
      {name:'Developer',value:'Belven#9560'},
      {name:'Node Version',value:`${process.version}`},
      {name:'Server Count',value:`${client.guilds.cache.size}`},
      {name:'User Count',value:`${client.users.cache.size}`},
      {name:'Channel Count',value:`${client.channels.cache.size}`},
      {name:'Memory Usage',value:`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`},
    )
    .setFooter('Bot by Belven')
    message.channel.send(embed)
  }
}
