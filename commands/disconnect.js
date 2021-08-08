async function disconnect(client, message)  {
    const Discord = require('discord.js')
    args = message.content.split(' ').slice(1)

    let embed = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription("**Pas de permission suffisante!**")
    .setColor("RANDOM")
    .setThumbnail(message.author.AvatarUrl)
    .setFooter('.',client.user.displayAvatarURL);

    let embeddeco = new Discord.MessageEmbed()
    .setTitle('**𝐃𝐞́𝐜𝐨𝐧𝐧𝐞𝐱𝐢𝐨𝐧**')
    .setDescription("**Cible déconnecté!**")
    .setColor("RANDOM")
    .setImage("https://www.ecoreseau.fr/wp-content/uploads/2018/02/cerveau.png")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());
    if(!message.member.hasPermission('MOVE_MEMBERS')) return message.reply(embed)
    let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    if(!cible) return message.reply("**Vous voullez déconnecter qui?**")
    cible.voice.kick();
    message.channel.send(embeddeco)
  }
    module.exports = {
       name: 'disconnect',
       aliases: ["d", "dc"],
       prefix: true,
       run: disconnect,
    };
  