async function rule34 (client, msg) {
  msg.reply("cmd désactivé pr l'instant :(")
/*
  const fs = require('fs');
  const Discord = require("discord.js")
  var message = msg
  const salonnsfw = require("../config.json")
  const a = salonnsfw.salon
  let female = fs.readdirSync(`commands/rule34`)
  let femalecmd = "`"+female.toString().split("_").join(" ").split(",").join("` , `")+ "`"

  const embednowaifu = new Discord.MessageEmbed()

  .setTitle(`Help 💧${client.user.username}💧:underage:`)
  .setColor("RED")
  .setDescription("**Mauvais usage de la commande.** (Usage: *<rule34 [waifu]*")
  .setThumbnail("https://i.imgur.com/1NrpxEq.png")
  .setFooter('.',client.user.displayAvatarURL())
  .setTimestamp(new Date());

  if(!msg.content.split(" ")[1]) return msg.delete(), msg.channel.send(embednowaifu).then(msg => msg.delete({timeout:100000}));

  if(msg.content.split(" ")[1].toLowerCase() === "random"){
    var randomfemale = female[Math.round(Math.random()*female.length)]
    var femalemsg = randomfemale
  }else var femalemsg = msg.content.split(" ").slice(1).join("_").toLowerCase()


    const embedcmd = new Discord.MessageEmbed()
    .setTitle(`Help 💧${client.user.username}💧:underage:`)
    .setColor("RED")
    .addField("**Liste des waifus disponibles dans la rule34 du bot:**" , femalecmd)
    .setThumbnail("https://i.imgur.com/1NrpxEq.png")
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp(new Date())

    let embedad = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
      .setDescription(`**Cette personne n'est pas contenue dans les fichiers du bot!** *(Faites __<help-nsfw__ pour plus de détails)*`)
      .setColor("RED")
      .setThumbnail(msg.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
    if(female.indexOf(femalemsg) === -1) return msg.delete(), msg.reply(embedad).then(msg => msg.delete({ timeout: 10000 })),msg.author.send(embedcmd);

      let embeda = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
      .setDescription(`**Merci d'effectuer cette commande dans <#${a}>**`)
      .setColor("RED")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
  
  
      let embed2 = new Discord.MessageEmbed()
      .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
      .setDescription(`**Merci d'effectuer cette commande dans un salon NSFW**`)
      .setColor("RED")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
      if(message.guild.id === "712286729985327116")
      {
     if(a.indexOf(message.channel.id) === -1)return message.delete(), message.reply(embeda).then(message => message.delete({ timeout: 10000 }));
      }else {
        if(!message.channel.nsfw) return message.reply(embed2)
      }
    
        function rule34(name){
          var type = "NSFW"
          var data = fs.readdirSync(`commands/rule34/${name.toLowerCase()}/${type.toLowerCase()}`); 
          var random = Math.round(Math.random()*data.length);
          var imgrandom = data[random]
          var img = `commands/rule34/${name.toLowerCase()}/${type.toLowerCase()}/${imgrandom}`
          return img.toString()
          }
          var image = rule34(femalemsg)
          let numberimg = image.split("/")
          numberimg = numberimg.slice(numberimg.length - 1)
        const attachment = new Discord.MessageAttachment(image);
      const embed = new Discord.MessageEmbed()
    .attachFiles(attachment)
    .setColor("RED")
    .setFooter(`${femalemsg.replace("_", " ")}`,client.user.displayAvatarURL())
    .setImage(`attachment://${numberimg}`);
    msg.channel.send({embed}).catch(console.error)*/
};

module.exports = {
    name: 'rule34',
    run: rule34,
    aliases: "rl34",
    prefix:true,
};
