async function play (client, message){
try {
  const {Util, MessageEmbed} = require('discord.js')
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const STAY_TIME = require('../config.json')
const channel = message.member.voice.channel;
const permissions = channel.permissionsFor(message.client.user);
var embed = new MessageEmbed()
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter('.',client.user.displayAvatarURL());
  
let args = message.content.split(" ").splice(1).join(" ")
if (!args) return message.reply(embed 
  .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
  .setDescription(`**Merci d'ajouter une URL/recherche youtube**`)   
  .setColor('RED'));

var serverQueue = message.client.queue.get(message.guild.id);
var searched = await yts.search(args)


if (!message.member.voice.channel) return message.reply(embed 
    .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
    .setDescription(`**Merci d'être connecté à un channel vocal**`)   
    .setColor('RED'));


    if (!permissions.has("CONNECT"))return message.reply(embed 
        .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
        .setDescription(`**Le bot n'a pas la permission de se connecter**`)   
        .setColor('RED'));
    if (!permissions.has("SPEAK"))return message.reply(embed 
        .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
        .setDescription(`**Le bot n'a pas la permission de parler**`)   
        .setColor('RED'));


if(searched.videos.length === 0)return message.reply(embed 
    .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
    .setDescription(`**Aucune vidéo trouvée**`)   
    .setColor('RED'));

    var songInfo = searched.videos[0]

    const song = {
      id: songInfo.videoId,
      title: Util.escapeMarkdown(songInfo.title),
      views: String(songInfo.views).padStart(10, ' '),
      url: songInfo.url,
      ago: songInfo.ago,
      duration: songInfo.duration.toString(),
      img: songInfo.image,
      req: message.author
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      let thing = new MessageEmbed()
      .setAuthor("Son correctement ajouté à la playlist de lecture", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("YELLOW")
      .addField("Nom", song.title, true)
      .addField("Durée", song.duration, true)
      .addField("Demandé par", song.req.tag, true)
      .addField("Vues:", `${song.views} | ${song.ago}`)
      .addField("Url", song.url, false)
      .setFooter(`Position dans la queue: ${serverQueue.songs.length -1}`,client.user.displayAvatarURL());
      return message.channel.send(thing);
    }

    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume:3,    
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        setTimeout(function () {
          if (queue.connection.dispatcher && message.guild.me.voice.channel) return;
          queue.voiceChannel.leave();
          embed.setDescription("Liste de lecture finie");
        }, STAY_TIME * 1000);
        queue.textChannel.send(`🎶Playlist terminée🎶`).catch(console.error);
        return message.client.queue.delete(message.guild.id);
      }
     

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        .on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 5);
      let thing = new MessageEmbed()
      .setAuthor("Musique lancée:", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("ORANGE")
      .addField("Nom", song.title, true)
      .addField("Durée", song.duration, true)
      .addField("Demandé par", song.req.tag, true)
      .setFooter(`Vues: ${song.views} | ${song.ago}`)
      .addField("Url", song.url, false)
      queue.textChannel.send(thing);
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true)
      play(queueConstruct.songs[0]);
    } catch (error) {
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.reply(embed
        .setDescription("Je ne peux rejoindre le channel :(")
        .setColor("RED")
        .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
        )
    }
} catch (error) {
  console.log(error)
}
}
module.exports = {
    name: 'play',
    aliases: ["p"],
    run: play,
    prefix:true,
};

