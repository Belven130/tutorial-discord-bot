module.exports = {
  name:'ban',
  description:'bans a member',
  execute(message,args) {
    if(
      message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_MEMBERS')
    ) {
      const target = message.mentions.users.first()
      if(target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${message.author}, user has been banned.`)
      } else {
        message.channel.send(`${message.author}, please mention someone to ban!`)
      }
    } else {
      message.channel.send('You does not have the required permission to ban a member!')
    }
  }
}
