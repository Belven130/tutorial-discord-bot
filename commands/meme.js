https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports = {
  name:'meme',
  description:'random funny and hot meme',
  execute(message,args) {
    https.get(url, (result) => {
      var body = ''
      result.on('data', (chunk) => {
        body += chunk
      })

      result.on('end', () => {
        var response = JSON.parse(body)
        var index = response.data.children[Math.floor(Math.random() * 99) +1].data
        
        if(index.post_hint !== 'image') {
          var text = index.selftext

          const textembed = new Discord.MessageEmbed()
          .setTitle(subReddiName)
          .setColor(9384170)
          .setDescription(`[${title}](${link})\n\n${text}`)
          .setURL(`https://reddit.com/${subReddiName}`)
          .setFooter(`Requested by ${message.author.tag}`)
          message.channel.send(textembed)
        }

        var image = index.preview.images[0].source.url.replace('&amp;', '&')
        var title = index.title
        var link = 'https://reddit.com' + index.permalink
        var subReddiName = index.subreddit_name_prefixed

        if(index.post_hint !== 'image') {
          const textembed = new Discord.MessageEmbed()
          .setTitle(subReddiName)
          .setColor('RANDOM')
          .setDescription(`[${title}](${link})\n\n${text}`)
          .setURL(`https://reddit.com/${subReddiName}`)
          message.channel.send(textembed)
        }
        console.log(image);
        const imageembed = new Discord.MessageEmbed()
        .setTitle(subReddiName)
        .setImage(image)
        .setColor('RANDOM')
        .setDescription(`[${title}](${link})`)
        .setURL(`https://reddit.com/${subReddiName}`)
        message.channel.send(imageembed)
      }).on('error', function (e) {
        console.log(`Got an error: `, e)
      })
    })
  }
}
