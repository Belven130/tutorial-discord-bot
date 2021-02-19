module.exports = {
  name:'unlock',
  description:'unlock a channel that is locked recently',
  execute(message,args) {
    if(
      message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS')
    ) {
      message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      }).then(() => {
        message.channel.send('Successfully unlocked this channel.')
      });
    } else {
      message.channel.send(':x: You does not have the required permission to unlock a channel! :x:')
    }
  }
}
