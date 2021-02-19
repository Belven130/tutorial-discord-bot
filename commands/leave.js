module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        let leaveEmbed = new Discord.MessageEmbed()
        .setTitle('Leaving channel...')
        .setColor('#24b3d3')
        let leaveEmbedTwo = new Discord.MessageEmbed()
        .setTitle('Leaved voice channel successfully.')
        .setColor('#24b3d3')
        await message.channel.send(leaveEmbed).then((msg)=> {
  setTimeout(function(){
    msg.edit(leaveEmbedTwo);
  }, 750)})
 
    }
}
