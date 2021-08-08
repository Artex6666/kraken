function poke(client, message)  {
    const Discord = require('discord.js')
    args = message.content.split(' ').slice(1)
    const clent = require('nekos.life')
    const {sfw} = new clent();
    let embederreur = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription("**Etant donné ta position de simple membre, sois gentil et vas dans #「💍」mariage**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    if(!message.member.hasPermission('ADD_REACTIONS')){
      if(message.channel.name != "「💍」mariage") return message.delete(), message.reply(embederreur).then(message => message.delete({ timeout: 10000 }));
    }
    let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!cible) return message.reply("**A qui voulez vous envoyer un poke?**")
    async function work() {
      let response = await sfw.poke();
      var embed = new Discord.MessageEmbed()
      .setDescription(`**${cible} réveillez vous, ${message.author} vous appelle!**`)
      .setTimestamp(new Date())
      .setFooter('.',client.user.avatarURL())
        .setImage(response.url)
        .setColor("RANDOM");
      message.channel.send(embed);
      cible.send(embed);
    } 
    work();
  }
    module.exports = {
       name: 'poke',
       run: poke,
    };
  