async function assist(client, message){
    message.delete()
    const discord = require('discord.js')
    let indispo = new discord.MessageEmbed()
    .setTitle('<a:non:791446582755196958>')
    .setDescription("**Vous êtes désormais en mode indisponible.**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    let dispo = new discord.MessageEmbed()
    .setTitle('<a:valid:791446582998204426')
    .setDescription("**Vous êtes désormais disponible.**")
    .setColor("GREEN")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());

    let role = message.guild.roles.cache.find(role => role.name === "Assistance")
    if(message.member.hasPermission("VIEW_AUDIT_LOG")){
        if(message.member._roles.indexOf(role.id) > -1 ){
            message.member.roles.remove(role.id);
            message.author.send(indispo)
        }
        else{
            message.member.roles.add(role.id)
            message.author.send(dispo)
        }
    }
}
module.exports = {
    name: "assist",
    run: assist,
    prefix: true
}