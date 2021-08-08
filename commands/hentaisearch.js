async function hs(client, message)  {
  const Discord = require('discord.js')
    const superagent = require("superagent");
    var tags = message.content.split(" ").slice(1).join("_").toLowerCase()
    let embedtags = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
      .setDescription(`**Merci d'ajouter un tags de recherche (usage: <hs [tags])**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
    if(!tags) return message.reply(embedtags)
    const salonnsfw = require("../config.json")
    const a = salonnsfw.salon
      let embed = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
      .setDescription(`**Merci d'effectuer cette commande dans <#${a}>**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());

      let embedof = new Discord.MessageEmbed()
      .setAuthor('❌[𝐄𝐫𝐫𝐞𝐮𝐫, aucun résultat]❌')
      .setTitle("Si aucune requete ne mène, allez sur le site pour rechercher directement le bon tag")
      .setURL("https://yande.re/post")
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
  
  
      let embed2 = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958>[𝐄𝐫𝐫𝐞𝐮𝐫]<a:non:791446582755196958>**')
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
      superagent.get(`https://yande.re/post.json?page=${Math.round(Math.random() * 20)}&tags=${tags.toString()}`).then(r => {
        if(r.body.length === 0) return message.reply(embedof)
          var embe2d = new Discord.MessageEmbed()
          .setFooter('.',client.user.avatarURL())
            .setImage(r.body[Math.floor((Math.random() * r.body.length))].jpeg_url)
            .setColor("RANDOM")
            .setTimestamp();
        
        message.reply(embe2d)
      })
    }
    module.exports = {
       name: 'hentai-search',
       aliases: ["hs"],
       prefix: true,
       run: hs,
    };
