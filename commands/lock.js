function lock (client, msg){
    const fs = require("fs")
    const configchannel = require("../dtb.json")
    const obj = JSON.parse(configchannel.id);
    const nop = "<a:non:791446582755196958>"
    const valid = "<a:valid:791446582998204426>"
    const Discord = require("discord.js")
    let embedperm = new Discord.MessageEmbed()
    .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
    .setDescription("**Permission insufisante.**")
    .setColor("RED")
    .setThumbnail(msg.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    let embederreur = new Discord.MessageEmbed()
    .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
    .setColor("RED")
    .setThumbnail(msg.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    let embedlock = new Discord.MessageEmbed()
    .setTitle(`${valid}`)
    .setDescription("**Salon lock avec succès.**")
    .setColor("GREEN")
    .setFooter('.',client.user.displayAvatarURL());

    let embedunlock = new Discord.MessageEmbed()
    .setTitle(`${valid}`)
    .setDescription("**Salon dévérouillé avec succès.**")
    .setColor("GREEN")
    .setFooter('.',client.user.displayAvatarURL());

    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send (embedperm)
    if(configchannel.lockChannelId.includes(msg.channel.id)){
        let index = configchannel/lockChannelId.indexOf(msg.channel.id)
        delete configchannel.lockChannelId[index]

            msg.channel.createOverwrite(msg.guild.id,{
                SEND_MESSAGES: true
            }).then(channel => {
                channel.setName(`🔒・${channel.name}`)
                configchannel.lockChannelId.push(channel.id)
                }).catch(error => {return msg.channel.send(embederreur.setDescription(`**Erreur**:${error}`))})
            msg.channel.send(embedunlock)       
    }else{
        obj["id"].push(msg.channel.id);

            msg.channel.createOverwrite(msg.guild.id,{
                SEND_MESSAGES: false
            }).then(channel => {
                channel.setName(`🔒・${channel.name}`)
                configchannel.lockChannelId.push(channel.id)
                }).catch(error => {return msg.channel.send(embederreur.setDescription(`**Erreur**:${error}`))})
            msg.channel.send(embedlock)
}
}
module.exports = {
    name: "lock",
    prefix: true,
    aliases: ["l"],
    run:lock
}