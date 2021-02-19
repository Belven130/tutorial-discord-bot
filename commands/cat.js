module.exports = {
  name:'cat',
  description:'kittens',
  execute(message,args,Discord){
    let choices = Math.random(Math.floor() * 1000)
    let url = 'https://source.unsplash.com/1600x900/?cat,cute'
    let fullImage = url + choices
    message.channel.send(fullImage)
  }
}
