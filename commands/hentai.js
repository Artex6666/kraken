function hentai(client, message)  {
    const superagent = require('superagent')
    const salonnsfw = require("../config.json")
    const a = salonnsfw.salon
      const Discord = require('discord.js')
      let embed = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Merci d'effectuer cette commande dans <#${a}>**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
  
  
      let embed2 = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Merci d'effectuer cette commande dans un salon NSFW**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
      if(message.guild.id === "712286729985327116")
      {
     if(a.indexOf(message.channel.id) === -1)return message.delete() && message.reply(embed).then(message => message.delete(30000));
      }else {
        if(!message.channel.nsfw) return message.reply(embed2)
      }
    let color = "#c72b3f"
      var hent = new Discord.MessageEmbed()
      superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'hentai'})
        .end((err, response) => {
          message.reply({embed:
          hent.setFooter('.',client.user.avatarURL())
          .setTimestamp()
        .setImage(response.body.message)
        .setColor(color)});
    });
    }
   
  module.exports = {
     name: 'hentai',
     description: 'hentai image',
     prefix: true,
     run: hentai,
  };
  