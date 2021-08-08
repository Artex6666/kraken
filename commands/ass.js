function ass(client, message)  {
    const superagent = require('superagent')
    const salonnsfw = require("../config.json")
    const a = salonnsfw.salon
      const Discord = require('discord.js')
      let embed = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Merci d'effectuer cette commande dans <#${a}>**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL())
      .setFooter('.',client.user.displayAvatarURL());
  
  
      let embed2 = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Merci d'effectuer cette commande dans un salon NSFW**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
      if(message.guild.id === "712286729985327116")
      {
     if(a.indexOf(message.channel.id) === -1)return message.delete(), message.reply(embed).then(message => message.delete({timeout:10000}));
      }else {
        if(!message.channel.nsfw) return message.reply(embed2)
      }
    let color = "#c72b3f"
      var ass = new Discord.MessageEmbed()
      superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'ass'})
        .end((err, response) => {
          message.reply({embed:
          ass.setFooter('.',client.user.avatarURL())
        .setImage(response.body.message)
        .setColor(color)});
    });
    }
   
  module.exports = {
     name: 'ass',
     prefix: true,
     run: ass,
  };
  