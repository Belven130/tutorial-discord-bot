module.exports = {
  name:'embed', //name is customizable
  description:'send an embed message',
  execute(message,args,Discord) {
    let embed = new Discord.MessageEmbed()
    .setTitle('Embed Message')
    .setDescription('Description here')
    .addFields(
      {name:'text here',value:'test here'},
      {name:'test here too!',value:'lol'}
      )
    .setImage('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
    .setThumbnail('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
    .setFooter('Bot by ME!!!!!!!!!!!!!!!!!!!!!')
    message.channel.send(embed)
  }
}
