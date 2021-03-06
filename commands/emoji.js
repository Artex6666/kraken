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
        .setTitle(`${nop}**[๐๐ซ๐ซ๐๐ฎ๐ซ]**${nop}`)
        .setDescription(`**Merci d'ajouter un รฉmoji (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!name){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[๐๐ซ๐ซ๐๐ฎ๐ซ]**${nop}`)
        .setDescription(`**Erreur de syntaxe. (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!customemoji){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[๐๐ซ๐ซ๐๐ฎ๐ซ]**${nop}`)
        .setDescription(`**Emoji invalide. (<emoji add [emote] [nom])**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
      }
      if(!message.channel.permissionsFor(message.guild.me).has(["MANAGE_EMOJIS"])){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[๐๐ซ๐ซ๐๐ฎ๐ซ]**${nop}`)
        .setDescription(`**Le bot n'as pas la permission de gรฉrer les รฉmojis.**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        
        message.reply(embed)
        return;
      }
      if(!message.member.hasPermission('MANAGE_EMOJIS')){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[๐๐ซ๐ซ๐๐ฎ๐ซ]**${nop}`)
        .setDescription(`**Tu n'as pas la permission de gรฉrer les รฉmojis.**`)
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
        .setTitle(`${valid}**[๐ฬ๐ฆ๐จ๐ฃ๐ข ๐๐ฃ๐จ๐ฎ๐ญ๐ฬ]**${valid}`)
        .setDescription(`**L'รฉmoji ${customemoji} a bien รฉtรฉ ajoutรฉ par <@${message.author.id}> sous le nom \`${name}\`**`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
          let logs = message.guild.channels.cache.find(channels => channels.name === "ใ๐ง?ใ๐ด๐ถ๐ซ๐ฌ๐น๐จ๐ป๐ฐ๐ถ๐ต");
            if(logs){
              logs.send(embed)
            }
        
    }else {
    let embed = new Discord.MessageEmbed()
        .setTitle(`${nop} **[๐๐ซ๐ซ๐๐ฎ๐ซ1]** ${nop}`)
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
