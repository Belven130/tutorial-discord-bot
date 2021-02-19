const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message,args,Discord) {
        const voiceChannel = message.member.voice.channel;

 
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the required permission to play!');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the require permission to play!');
        if (!args.length) return message.channel.send('Please enter a name of the video!');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                let endEmbed = new Discord.MessageEmbed()
                .setTitle('Music has ended, I\'ll leave the voice channel. To continue listening, type `$play {name/url}`.')
                .setColor('#24b3d3')
                message.channel.send(endEmbed);
            });
            let playEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author}, now playing ***Your Link!***`)
            .setColor('#24b3d3')
            await message.reply(playEmbed)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave()
                let endEmbedTwo = new Discord.MessageEmbed()
                .setTitle(`${video.title} has ended and I'll leave this voice channel. To continue listening, type \` %play {video name/video url} \`.`)
                .setColor('#24b3d3')
                message.channel.send(endEmbedTwo)
            });

            let endEmbedTwo = new Discord.MessageEmbed()
            .setTitle(`:thumbsup: Now Playing ***${video.title}***`)
            .setColor('#24b3d3')
            await message.reply(endEmbedTwo)
        } else {
          let no = new Discord.MessageEmbed()
          .setTitle(':x: No video results found! :x:')
          .setColor('#ff0000')
            message.channel.send(no);
        }
        
    }
}
