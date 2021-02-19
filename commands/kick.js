module.exports = {
  name:'kick',
  description:'kicks a member',
  execute(message,args) {
    if(
      message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')
    ){
      const target = message.mentions.users.first()
      if(target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.channel.send(`${message.author}, ${targetMember} has been kicked.`)
      } else {
        message.channel.send(`${message.author}, please mention someone to kick!`)
      }
    } else {
      message.channel.send(`${message.author}, you does not have the required permission to kick a member!`)
    }
  }
}
