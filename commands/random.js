async function random(client, message)  {
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
     if(a.indexOf(message.channel.id) === -1)return message.delete(), message.reply(embed).then(message => message.delete(30000));
      }else {
        if(!message.channel.nsfw) return message.reply(embed2)
      }
      const DabiImages = require("dabi-images");
      const DabiClient = new DabiImages.Client();
      // getting real images
      DabiClient.nsfw.real.random().then(json => {
        var embe2d = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL())
          .setImage(json.url)
          .setColor("RANDOM")
          .setTimestamp();
        message.reply(embe2d)
      }).catch(error => {
          console.log(error);
      });
    
    
        }
        module.exports = {
           name: 'random',
           prefix: true,
           run: random,
        };