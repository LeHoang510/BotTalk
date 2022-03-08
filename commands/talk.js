// const ytdl = require('ytdl-core');
// const ytSearch = require('yt-search');
const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource
} = require('@discordjs/voice');
var xhr = require("../node_modules/xhr");
 
let player = createAudioPlayer();
let url = 'https://api.fpt.ai/hmi/tts/v5';

async function connectToVC(message){

    return connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
        selfDeaf: false,
    }); 
}
async function talk(resource){
   
	player.play(resource, {seek:0 ,volume: 0.3});
}

module.exports = {
    name: 'talk',
    description: 'Talk to me baby',
    async execute(client, message, args){
        const connection = await connectToVC(message);


        xhr({
            method: "post",
            body: message.content,
            uri: url,
            headers: {
                "api-key" : "KbKVvrwsQxT1JKyuQu8zXnLmSmNOVWMB",
                'speed': '',
                'voice': 'banmai'
            }
        }, function (err, resp, body) {
            // check resp.statusCode
            if(resp.statusCode === 200){
                resource = createAudioResource(this.response);
            
                //resource = await createAudioResource('D:/Project Info/BotDiscord/BotTalk/music/SeLuonYeuEm.mp3');
                talk(resource);
                connection.subscribe(player);
            }else{ console.error('dmm')}
            
        });


        // if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command');
        // const permissions = voiceChannel.permissionsFor(message.client.user);
        // if(!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissions');
        // if(!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissions');
        // if(!args.length) return message.channel.send('You need to send the second argument');
        
        // const connection = await voiceChannel.join();

        // const videoFinder = async(query) =>{
        //     const videoResult = await ytSearch(query);

        //     return (videoResult.videos.length>1)? videoResult.videos[0] : null;
        // }
        // const video = await videoFinder(args.join(' '));

        // if(video){
        //     const stream = ytdl(video.url, {filter: 'audioonly'});
        //     connection.play(stream, {seek:0 ,volume: 1})
        //     .on('finish',() => {
        //         voiceChannel.leave();
        //     });

        //     await message.reply(`:thumbsup: Now playing`);
        // }else{
        //     message.channel.send('No video results found');
        // }
   }
}