function cry(client, message)  {
  const Discord = require('discord.js')

  const Neko = require("neko-love");
  const clent = new Neko.Client();

  clent.cry().then((url) => {

    let embederreur = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription("**Etant donné ta position de simple membre, sois gentil et vas dans #「💍」mariage**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    if(!message.member.hasPermission('ADD_REACTIONS')){
    if(message.channel.name !== "「💍」mariage") return message.delete(), message.reply(embederreur).then(message => message.delete({ timeout: 10000 }));
    }

  
        var embe2d = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL)
          .setImage(url)
          .setColor("RANDOM")
          .setTimestamp();
      
      message.reply(embe2d)
  });
  }
  module.exports = {
     name: 'cry',
     run: cry,
  };
