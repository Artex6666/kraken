async function skip (client, message){
    const {MessageEmbed} = require('discord.js')
    const channel = message.member.voice.channel;
    var embed = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter('.',client.user.displayAvatarURL());
    
    var serverQueue = message.client.queue.get(message.guild.id);

    
    if (!message.member.voice.channel) return message.reply(embed 
        .setTitle('**<a:non:791446582755196958> [๐๐ซ๐ซ๐๐ฎ๐ซ] <a:non:791446582755196958>**')
        .setDescription(`**Merci d'รชtre connectรฉ ร  un channel vocal**`)   
        .setColor('RED'));
    
        if (!client.guilds.cache.get(message.guild.id).voiceStates.cache.get(client.user.id).channelID) return message.reply(embed.setDescription("**Le bot n'est actuellement pas en vocal, utilisez <play pour lancer la musique**").setColor('RED').setTitle('**<a:non:791446582755196958> [๐๐ซ๐ซ๐๐ฎ๐ซ] <a:non:791446582755196958>**'))
        if (!message.member.guild.voiceStates.cache.get(message.author.id).channelID === client.guilds.cache.get(message.guild.id).voiceStates.cache.get(client.user.id).channelID) return message.reply(embed.setDescription("**Vous n'รชtes pas dans le mรชme salon que le bot**").setColor('RED').setTitle('**<a:non:791446582755196958> [๐๐ซ๐ซ๐๐ฎ๐ซ] <a:non:791446582755196958>**'))

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

        if (!serverQueue) return message.reply(embed.setDescription("**Aucune musique dans la liste de lecture**").setColor('RED').setTitle('**<a:non:791446582755196958> [๐๐ซ๐ซ๐๐ฎ๐ซ] <a:non:791446582755196958>**'));
          
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume:3,    
            playing: true,
          };

if(message.member.permissions.has("BAN_MEMBERS")){
    queueConstruct.songs.shift()
    serverQueue.songs.shift()
          const queue = message.client.queue.get(message.guild.id);
          let thing = new MessageEmbed()
          .setAuthor("Musique lancรฉe:", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
          .setThumbnail(song.img)
          .setColor("ORANGE")
          .addField("Nom", song.title, true)
          .addField("Durรฉe", song.duration, true)
          .addField("Demandรฉ par", song.req.tag, true)
          .setFooter(`Vues: ${song.views} | ${song.ago}`)
          .addField("Url", song.url, false)
          queue.textChannel.send(thing);
        };
    

          play(queueConstruct.songs[0]).catch(console.error())
    };
    module.exports = {
        name: 'skip',
        aliases: ["s"],
        run: skip,
        prefix:true,
    };
    