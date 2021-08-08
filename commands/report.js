function Report (client, message) {
    const Discord = require('discord.js')
    message.delete()
    args = message.content.split(' ').slice(1)


    let embedmembrenull = new Discord.MessageEmbed()
    .setColor('#1100ff')
    .setTitle("**Report**")
    .setDescription("**Veuillez choisir un membre à signaler.**")
    .setFooter('.',client.user.displayAvatarURL());

    let embedraisonnull = new Discord.MessageEmbed()
    .setColor('#1100ff')
    .setTitle("**Report**")
    .setDescription("**Il te faut ajouter une raison.**")
    .setFooter('.',client.user.displayAvatarURL());
    let embedtoi = new Discord.MessageEmbed()
    .setColor('#1100ff')
    .setTitle("**Report**")
    .setDescription("**Tu t'es vraiment signalé toi même?**")
    .setFooter('.',client.user.displayAvatarURL());

    let cible = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let raison = args.slice(1).join(' ')
    let logs = message.guild.channels.cache.find(channels => channels.name === "「👀」𝐑𝐄𝐏𝐎𝐑𝐓𝐒");

    if (!cible) return message.author.send(embedmembrenull);
    if (!raison) return message.author.send(embedraisonnull);
    if (message.author.id === cible.id) return message.author.send(embedtoi);
    if (!logs) return message.author.send(`> **Veuillez créer un salon nommé 「👀」𝐑𝐄𝐏𝐎𝐑𝐓𝐒 où stocker les reports.**`);

    let embed = new Discord.MessageEmbed()
        .setTitle("**Report**")
        .setColor('#1100ff')
        .setThumbnail(cible.user.avatarURL)
        .addField('Membre signalé:', `${cible} \n(ID: ${cible.id} )`)
        .addField('Signalé par', `${message.author} \n(ID: ${message.author.id}`)
        .addField('Heure:', message.createdAt)
        .addField('Signalé dans', message.channel)
        .addField('Raison', raison)
        .setFooter('.',client.user.displayAvatarURL());

    let embedpv = new Discord.MessageEmbed()
    .setColor('#1100ff')
    .setThumbnail(cible.user.avatarURL)
    .setTitle("Report")
    .setDescription(`**tu as bien signalé ${cible.user.username}** \n(ID: ${cible.id} )`)
    .addField('Date:', message.createdAt)
    .addField('Signalé dans', message.channel)
    .addField('Raison:', raison)
    .setFooter('.',client.user.displayAvatarURL());

    let cibleembed = new Discord.MessageEmbed()
    .setColor('#1100ff')
    .setThumbnail(cible.user.avatarURL)
    .setTitle("Report")
    .setDescription(`**tu as été signalé**`)
    .addField('Date:', message.createdAt)
    .addField('Signalé dans', message.channel)
    .addField('Raison:', raison)
    .setFooter('.',client.user.displayAvatarURL());
    message.author.send(embedpv)
    logs.send(embed);
    cible.send(cibleembed)
};

module.exports = {
    name: 'report',
    prefix: true,
    run: Report,
};