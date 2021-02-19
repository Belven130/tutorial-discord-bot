module.exports = {
  name:'clear',
  description:'clear an amount of messages specified',
  async run (message,args){
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount <2 || deleteCount > 100)
    return message.reply('Please provide a number between 2 and 100 for the number of messages to delete! Example : !clear 10')

    const fetched = await message.channel.messages.fetch({limit:deleteCount});
    message.channel.bulkDelete(fetched)
    message.channel.send(`I have deleted ${deleteCount} messages.`).catch(error => message.reply(`Couldn't delete messages because of: ${error}`))
  }
}
