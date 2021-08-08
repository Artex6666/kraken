function nekko(client, msg)  {
  const salonnsfw = require("../config.json")
  const a = salonnsfw.salon
    const Discord = require('discord.js')
    let embed = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription(`**Merci d'effectuer cette commande dans <#${a}>**`)
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());


    let embed2 = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription(`**Merci d'effectuer cette commande dans un salon NSFW**`)
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());
    if(msg.guild.id === "712286729985327116")
    {
   if(a.indexOf(msg.channel.id) === -1)return msg.delete(), msg.reply(embed).then(msg => msg.delete(30000));
    }else {
      if(!msg.channel.nsfw) return msg.reply(embed2)
    }

  const clent = require('nekos.life')
  const {nsfw} = new clent();

  async function work() {
    let response = await nsfw.neko();
    var embed = new Discord.MessageEmbed()
      .setFooter('.',client.user.avatarURL())
      .setImage(response.url)
      .setColor("#c72b3f");
    msg.reply(embed);
  }
  work();
}

  module.exports = {
     name: 'neko',
     prefix: true,
     run: nekko,
  };
