function lc (client , message){
const Discord = require('discord.js')
let rep = ["pas la peine va voir ailleur", "c'est mort", "1% évite ça va être (très) compliqué", "5%", "10%", "15%" , "20%" , "25%" , "30%" , "35%" , "40%" , "45%" , "50% gnéé" , "55%" , "60%" , "65%" , "70%" , "75%" , "80%" , "85%" , "90%" , "95%" , "100% mariez vous et faites 2 enfants"];
  let reptaille = Math.floor((Math.random() * rep.length));
  let question = message.mentions.members.first() ||message.content.split(" ").slice(1).join(" ")
  if(!question) return message.reply("**Avec qui voulez vous calculer votre amour ? (<lc [?????????])**")
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .setThumbnail(`${message.author.avatarURL()}`)
  if(message.mentions.members.array()[1]){
    embed.addField("calcul d'une relation possible entre:❤", `${message.mentions.members.first()} et ${message.mentions.members.array()[1]}`)
  }else{
    embed.addField("calcul d'une relation plausible avec:❤", question)
  }
  embed.addField("relation estimée à ❤", rep[reptaille])
  message.channel.send(embed)

    }

    module.exports = {
        name: 'love-calc',
        aliases: ["lc"],
        run: lc,
        prefix:true,
    };