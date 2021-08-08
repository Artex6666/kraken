 function ticket (client, msg){
     if(!msg.author.permissions.has === "ADMINISTRATOR") return
     var {MessageEmbed} = require("discord.js")
     var embed = new MessageEmbed()
     .setFooter("yolo")
     .setColor("RANDOM")
 var allsalon = require("../salonticket.json")
     msg.guild.create.channel("ticket-system").then(channel => allsalon.id.push(channel) &&
     channel.send(embed.setDescription("clique sur la réaction pour ")))

 }