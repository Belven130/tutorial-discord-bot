module.exports = {
  name:'lock',
  description:'locks a channel specified',
  execute(message,args) {
    if(
      message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("MANAGE_CHANNELS")
    ) {
      message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send('Successfully locked this channel.')
      });
    } else {
      message.channel.send(':x: You do not have the required permission to lock a channel! :x:')
    }
  }
}
