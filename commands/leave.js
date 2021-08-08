function leave(client, message)  {
    const {MessageEmbed}= require("discord.js")
    var embed = new MessageEmbed()
    .setTimestamp()
    .setColor('RED')
    .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
    .setFooter('.',client.user.displayAvatarURL());
    if (!client.guilds.cache.get(message.guild.id).voiceStates.cache.get(client.user.id).channelID) return message.reply(embed.setDescription("**Le bot n'est actuellement pas en vocal, utilisez <play pour lancer la musique**"))
    if (!message.member.guild.voiceStates.cache.get(message.author.id).channelID === client.guilds.cache.get(message.guild.id).voiceStates.cache.get(client.user.id).channelID) return message.reply(embed.setDescription("**Vous n'êtes pas dans le même salon que le bot**"))
    {
    client.guild.member.voice.channel.leave()
      message.reply('<a:valid:791446582998204426>');
    };
    }
    module.exports = {
       name: 'leave',
       aliases: ["l"],
       prefix: true,
       run: leave,
    };
