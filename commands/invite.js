/*function invite (client, message){
    const discord = require("discord.js")
    var user = message.author;
    const validé = client.emojis.cache.find(emoji => emoji.id === "791446582998204426");
    message.guild.cache.fetchInvites().then(invites =>
        {
            const userInvites = invites.array().filter(o => o.inviter.id === user.id);
            var userInviteCount = 0;
            for(var i=0; i < userInvites.length; i++)
            {
                var invite = userInvites[i];
                userInviteCount += invite['uses'];
            }
            var embed = new discord.MessageEmbed()
                .setTitle(`${validé}**Invitations de ${message.author.username}**${validé}`)
                .addField("**Invitations totales:**", userInviteCount)
                .setTimestamp()
                .setFooter('.',client.user.avatarURL())
                .setColor("GREEN");
                 message.channel.send(embed)
})
}
module.exports = {
    name: "invite",
    prefix: true,
    run: invite
}*/