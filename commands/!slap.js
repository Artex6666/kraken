function slap(client, message)  {
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
      let response = await sfw.slap();
      if(cible){
        if(cible.user.id === message.author.id) return message.reply('**Pourquoi tu veux te victim ta fais une connerie?**').then(message => message.delete({ timeout: 10000 }));
        var embed = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL())
        .setDescription(`**${message.author} victimise ${cible}**`)
          .setImage(response.url)
          .setColor("RANDOM")
          .setTimestamp(new Date());
          if(cible.user.id === "444846310407798785"){
          var embed = new Discord.MessageEmbed()
          .setFooter('.',client.user.avatarURL())
          .setDescription(`**${message.author} touche pas à mon maître**`)
            .setImage("https://discordemoji.com/assets/emoji/Reverse.png")
            .setColor("RANDOM")
            .setTimestamp(new Date());
          }
      }else{
        var embed = new Discord.MessageEmbed()
        .setFooter('.',client.user.avatarURL())
          .setImage(response.url)
          .setColor("RANDOM")
          .setTimestamp(new Date());
      }
      message.channel.send(embed)
    }
    work();
  }
    module.exports = {
       name: 'slap',
       run: slap,
    };
  