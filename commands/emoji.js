async function emote(client, message)  {

if(message.content.split(" ")[1].toLowerCase() === "add"){
      const Discord = require('discord.js')
        const valid = "<a:valid:791446582998204426>"
        const nop = "<a:non:791446582755196958>"
      let emoji = message.content.split(" ").splice(2).join(" ")
      let customemoji = Discord.Util.parseEmoji(emoji)
      let name = message.content.split(" ").splice(3) || customemoji.name;

      
      if(!emoji){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Merci d'ajouter un émoji (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!name){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Erreur de syntaxe. (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!customemoji){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Emoji invalide. (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!message.channel.permissionsFor(message.guild.me).has(["MANAGE_EMOJIS"])){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Le bot n'as pas la permission de gérer les émojis.**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        
        message.reply(embed)
        return;
      }
      if(!message.member.hasPermission('MANAGE_EMOJIS')){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Tu n'as pas la permission de gérer les émojis.**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if (customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
          customemoji.animated ? "gif" : "png"
        }`;
        message.guild.emojis.create(
          `${Link}`,
          `${name}`
        );
        let embed = new Discord.MessageEmbed()
        .setTitle(`${valid}**[𝐄́𝐦𝐨𝐣𝐢 𝐚𝐣𝐨𝐮𝐭𝐞́]**${valid}`)
        .setDescription(`**L'émoji ${customemoji} a bien été ajouté par <@${message.author.id}> sous le nom \`${name}\`**`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
          let logs = message.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
            if(logs){
              logs.send(embed)
            }
        
    }else {
    let embed = new Discord.MessageEmbed()
        .setTitle(`${nop} **[𝐄𝐫𝐫𝐞𝐮𝐫1]** ${nop}`)
        .setDescription(`**Emoji invalide. (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
    }
  }
}
module.exports = {
    name: 'emoji',
    prefix: true,
    run: emote,
};
