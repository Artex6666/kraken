async function disconnect(client, message)  {
    const Discord = require('discord.js')
    args = message.content.split(' ').slice(1)

    let embed = new Discord.MessageEmbed()
    .setTitle('**[๐๐ซ๐ซ๐๐ฎ๐ซ]**')
    .setDescription("**Pas de permission suffisante!**")
    .setColor("RANDOM")
    .setThumbnail(message.author.AvatarUrl)
    .setFooter('.',client.user.displayAvatarURL);

    let embeddeco = new Discord.MessageEmbed()
    .setTitle('**๐๐ฬ๐๐จ๐ง๐ง๐๐ฑ๐ข๐จ๐ง**')
    .setDescription("**Cible dรฉconnectรฉ!**")
    .setColor("RANDOM")
    .setImage("https://www.ecoreseau.fr/wp-content/uploads/2018/02/cerveau.png")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());
    if(!message.member.hasPermission('MOVE_MEMBERS')) return message.reply(embed)
    let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    if(!cible) return message.reply("**Vous voullez dรฉconnecter qui?**")
    cible.voice.kick();
    message.channel.send(embeddeco)
  }
    module.exports = {
       name: 'disconnect',
       aliases: ["d", "dc"],
       prefix: true,
       run: disconnect,
    };
  