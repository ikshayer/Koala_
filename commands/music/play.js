const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js')

//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'pause', 'unpause', 'loop'], //We are using aliases to run the command
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message,args, cmd, client, Discord){


        //Checking for the voicechannel and permissions (you can add more permissions if you like).
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

        //This is our server queue. We are getting this server queue from the global queue.
        const server_queue = queue.get(message.guild.id);

        //If the user has used the play command
        if (cmd === 'play'){
            if (!args.length) {

            return message.channel.send('Please enter the song name or a few keywords to find the song!');
        
        }
            let song = {};

            //If the first argument is a link. Set the song object to have two keys. Title and URl.
            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { 
                    title: song_info.videoDetails.title, 
                    url: song_info.videoDetails.video_url, 
                    thumbnail: song_info.videoDetails.thumbnails
                    
                }

            } else {
                //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = { 
                        title: video.title,
                        url: video.url,
                        thumbnail: video.thumbnail,
                        

                        

                     }
                } else {
                     message.channel.send('Error finding video.');
                }
            }

            //If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: [],
                    loop: false,
                }
                
                //Add our key and value pair into the global queue. We then use this to get our server queue.
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                //Establish a connection and play the song with the vide_player function.
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else{
                const playEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('👍 Added to the Queue', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
                .setTitle(`${song.title}`)
                .setURL(`${song.url}`)
                .setThumbnail(`${song.thumbnail}`)

                server_queue.songs.push(song);

                return message.channel.send(playEmbed);
            }
        }

        else if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'stop') {
            stop_song(message, server_queue);

            await message.channel.send('See ya next time!');
        }


        //Pause command
        else if(cmd === "pause"){
         if(server_queue.connection.dispatcher.paused) return message.channel.send("Song is already paused!");//Checks if the song is already paused.
         server_queue.connection.dispatcher.pause();//If the song isn't paused this will pause it.

         message.channel.send('The song has now been paused');//Sends a message to the channel the command was used in after it pauses.
        }
  
        //Unpause command
        else if(cmd === "unpause"){
        if(!server_queue.connection.dispatcher.paused) return message.channel.send("Song isn't paused!");    //Checks if the song isn't paused.
         server_queue.connection.dispatcher.resume();      //If the song is paused this will unpause it.

         message.channel.send('The song has now been resumed!');      //Sends a message to the channel the command was used in after it unpauses.
         }
         else if(cmd === 'loop'){
             if(!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to perform this command!")
             if(!server_queue) return message.channel.send('There is nothing playing');

             server_queue.loop = !server_queue.loop

             return message.channel.send(`Loop is now ${server_queue.loop ? `**Enabled**` : `**Disabled**`}!`);

         }
    }
    
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        if(!song_queue.loop) song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });

    const QueueEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Now Playing', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    .setTitle(`${song.title}`)
    .setURL(`${song.url}`)
    .setThumbnail(`${song.thumbnail}`)

    await song_queue.text_channel.send(QueueEmbed);
    
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    if(!server_queue){

        return message.channel.send('There are no songs in the queue 😔');
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}