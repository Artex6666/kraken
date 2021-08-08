async function wallpaper (client, msg) {
    const fs = require('fs');
    const Discord = require("discord.js")
    let female = fs.readdirSync(`commands/rule34`)
    let femalecmd = "`"+female.toString().split("_").join(" ").split(",").join("` , `")+ "`"

    const embednowaifu = new Discord.MessageEmbed()

    .setTitle(`Help 💧${client.user.username}💧:underage:`)
    .setColor("RED")
    .setDescription("**Mauvais usage de la commande.** (Usage: *<wallpaper [waifu]*")
    .setThumbnail("https://i.imgur.com/1NrpxEq.png")
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp(new Date());


    if(!msg.content.split(" ")[1]) return msg.delete(), msg.channel.send(embednowaifu).then(msg => msg.delete({timeout:10000}));
  
    if(msg.content.split(" ")[1].toLowerCase().toString() === "random"){
      var randomfemale = female[Math.round(Math.random()*female.length)]
      var femalemsg = randomfemale
    }else var femalemsg = msg.content.split(" ").slice(1).join("_").toLowerCase()


    const embedcmd = new Discord.MessageEmbed()

    .setTitle(`Help 💧${client.user.name}💧:underage:`)
    .setColor("RED")
    .addField("**Liste des waifus disponibles dans la rule34 du bot:**" , femalecmd)
    .setThumbnail("https://i.imgur.com/1NrpxEq.png")
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp(new Date());

    let embedad = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Cette personne n'est pas contenue dans les fichiers du bot!** *(Faites __<help-nsfw__ pour plus de détails)*`)
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());

      if(female.indexOf(femalemsg) === -1) return msg.delete(), msg.author.send(embedcmd) ,msg.channel.send(embedad).then(msg => msg.delete({timeout:10000}));
      let embeda = new Discord.MessageEmbed()
      .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
      .setDescription(`**Merci d'effectuer cette commande dans 「📸」medias**`)
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());

      if(msg.guild.id === "712286729985327116")
      {
     if(msg.channel.name !== "「📸」medias")return msg.delete(), msg.reply(embeda).then(msg => msg.delete({timeout:10000}));
      }

        function wallpaper(name){
          var type = "SFW"
          var data = fs.readdirSync(`commands/rule34/${name.toLowerCase()}/${type.toLowerCase()}`); 
          var random = Math.round(Math.random()*data.length);
          var imgrandom = data[random]
          var img = `commands/rule34/${name.toLowerCase()}/${type.toLowerCase()}/${imgrandom}`
          return img.toString()
          }
          var image = wallpaper(femalemsg)
          let numberimg = image.split("/")
          numberimg = numberimg.slice(numberimg.length - 1)
        const attachment = new Discord.MessageAttachment(image);
      const embed = new Discord.MessageEmbed()
    .attachFiles(attachment)
    .setColor("GREEN")
    .setFooter(`${femalemsg.replace("_", " ")}`,client.user.displayAvatarURL())
    .setImage(`attachment://${numberimg}`);
    msg.channel.send({embed}).catch(console.error)
};

module.exports = {
    name: 'wallpaper',
    run: wallpaper,
    prefix:true,
};
