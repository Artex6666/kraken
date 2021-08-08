function kiss(client, message)  {
    const Discord = require('discord.js')
    args = message.content.split(' ').slice(1)
    let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    const clent = require('nekos.life')
    const {sfw} = new clent();

    let embederreur = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription("**Etant donné ta position de simple membre, sois gentil et vas dans #「💍」mariage**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    if(message.guild.id === "712286729985327116")
    {
      if(!message.member.hasPermission('ADD_REACTIONS')){
        if(message.channel.name !== "「💍」mariage") return message.delete(), message.reply(embederreur).then(message => message.delete({ timeout: 10000 }));
      }
    }

    async function work() {
      let response = await sfw.kiss();
      if(cible){
        if(message.author.id != cible.user.id){ 
        var embed = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL())
        .setDescription(`**${message.author} embrasse ${cible}**`)
          .setImage(response.url)
          .setColor("RANDOM")
          .setTimestamp(new Date());
      }
      else{
        return message.reply("**Euh.... Impossible de s'embrasser sois-même!**").then(message => message.delete({ timeout: 10000 }));
      }
      }else{
        var embed = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL())
          .setImage(response.url)
          .setColor("RANDOM")
          .setTimestamp(new Date());
      }
      message.reply(embed)
    }
    work();
  }
    module.exports = {
       name: 'kiss',
       run: kiss,
    };
  