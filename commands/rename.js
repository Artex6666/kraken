async function rename(client, message){

if(message.content.toLowerCase().split(" ")[1] === "everyone"){
    const Discord = require('discord.js')
    const valid = "<a:valid:791446582998204426>"
    const nop = "<a:non:791446582755196958>"
 /*   
  let rMember =
  message.mentions.members.first() || // `.first()` is a function.
  message.guild.members.cache.find((m) => m.user.tag === args[0]) ||
  message.guild.members;*/

  let embedpseudo = new Discord.MessageEmbed()
  .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
  .setDescription("**Aucun pseudo n'est indiqué.**")
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL())
  .setFooter('.',client.user.displayAvatarURL());

  let embedpseudolong = new Discord.MessageEmbed()
  .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
  .setDescription("**Pseudo trop long :(**")
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL())
  .setFooter('.',client.user.displayAvatarURL());

  if(!message.channel.permissionsFor(message.guild.me).has(["MANAGE_NICKNAMES"])){
    let embed = new Discord.MessageEmbed()
    .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
    .setDescription(`**Le bot n'as pas la permission de gérer les pseudos.**`)
    .setColor("RED")
    .setTimestamp()
    .setFooter('.',client.user.displayAvatarURL());
    
    message.reply(embed)
    return;
  }

let args = message.content.split(" ").splice(1)
let pseudo = args.splice(1).join(" ")
if (!pseudo)
  return message.channel.send(embedpseudo);
if (pseudo.length >30 )
  return message.channel.send(embedpseudolong); 

if (!message.member.hasPermission(["ADMINISTRATOR"])){
    let embed = new Discord.MessageEmbed()
    .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
    .setDescription(`**Tu n'as pas la permission ADMINISTRATEUR.**`)
    .setColor("RED")
    .setTimestamp()
    .setFooter('.',client.user.displayAvatarURL());
    message.reply(embed)
    return;
}
  
await    message.guild.members.cache.forEach(users => {
    users.setNickname(pseudo).catch((e) => console.log(e))
  })
let embed = new Discord.MessageEmbed()
.setTitle(`${valid}`)
.setDescription(`**Le pseudo ${pseudo} a bien été ajouté à everyone(${message.guild.memberCount}) par <@${message.author.id}>**`)
.setColor("GREEN")
.setTimestamp();

    message.channel.send(embed)
  let logs = message.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
  if(logs){
    logs.send(embed)
  }

}



};

module.exports = {
    name: "rename",
    run: rename,
    prefix: true                       
}