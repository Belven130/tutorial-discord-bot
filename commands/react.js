module.exports = {
  name:'react',
  description:'react on a message that executed this command',
  execute(message,args){
    message.react('👿')
    message.channel.send('I have reacted on your message.').then((sentMessage) => sentMessage.react('🤑'))
  }
}
