function lick(client, message)  {
  const Discord = require('discord.js')
  args = message.content.split(' ').slice(1)
  let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0])

  const star = require('star-labs');

  let embederreur = new Discord.MessageEmbed()
  .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
  .setDescription("**Etant donné ta position de simple membre, sois gentil et vas dans #「💍」mariage**")
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL())
  .setFooter('.',client.user.displayAvatarURL());

  if(!message.member.hasPermission('ADD_REACTIONS')){
    if(message.channel.name != "「💍」mariage") return message.delete(), message.reply(embederreur).then(message => message.delete({ timeout: 10000 }));
  }

    if(cible){
      if(message.author.id != cible.user.id){ 
      var embed = new Discord.MessageEmbed()
      .setFooter('.',client.user.avatarURL())
      .setDescription(`**${message.author} leche ${cible}**`)
        .setImage(star.lick())
        .setColor("RANDOM")
        .setTimestamp(new Date());
    }
    else{
      return message.delete(), message.reply("**Tu veux te lêcher toi même ?**").then(message => message.delete({ timeout: 10000 }))
    }
    }else{
      var embed = new Discord.MessageEmbed()
      .setFooter('.',client.user.avatarURL())
        .setImage(star.lick())
        .setColor("RANDOM")
        .setTimestamp(new Date());
    }
    message.reply(embed)

}
  module.exports = {
     name: 'lick',
     run: lick,
  };
