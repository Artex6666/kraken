async function delrole(client, message){

    if(message.content.toLowerCase().split(" ")[1] === "everyone"){
        const Discord = require('discord.js')
        const valid = "<a:valid:791446582998204426>"
        const nop = "<a:non:791446582755196958>"

    
      let embedrole = new Discord.MessageEmbed()
      .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
      .setDescription("**Aucun role n'est indiqué.**")
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter('.',client.user.displayAvatarURL());
    
      if(!message.channel.permissionsFor(message.guild.me).has(["MANAGE_ROLES"])){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Le bot n'as pas la permission de gérer les roles.**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        
        message.reply(embed)
        return;
      }
    
    let args = message.content.split(" ").splice(1)
    let role =
      message.guild.roles.cache.find((r) => r.name == args[1]) ||
      message.guild.roles.cache.find((r) => r.id == args[1]) ||
      message.mentions.roles.first();
    if (!role)
      return message.channel.send(embedrole);
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
        .setDescription(`**Tu n'as pas la permission de gérer les roles.**`)
        .setColor("RED")
        .setTimestamp()
        .setFooter('.',client.user.displayAvatarURL());
        message.reply(embed)
        return;
    }
      
    await    message.guild.members.cache.forEach(users => {
        users.roles.remove(role.id).catch((e) => console.log(e))
      })
    let embed = new Discord.MessageEmbed()
    .setTitle(`${valid}**[𝐑𝐨𝐥𝐞 𝐫𝐞𝐭𝐢𝐫𝐞́]**${valid}`)
    .setDescription(`**Le rôle ${role} a bien été retiré à everyone(${message.guild.memberCount}) par <@${message.author.id}>**`)
    .setColor("YELLOW")
    .setTimestamp();
    
        message.channel.send(embed)
      let logs = message.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
      if(logs){
        logs.send(embed)
      }
    
    }
    
    
    
    };
    
    module.exports = {
        name: "delrole",
        run: delrole,
        prefix: true
    }