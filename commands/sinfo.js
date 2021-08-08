function sinfo(client, message)  {
  function checkDays(date) {
    var now = new Date();
    var diff = now.getTime() - date.getTime();
    var days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
    const Discord = require('discord.js')
    let color = "RANDOM"
    var SinfoEmbed = new Discord.MessageEmbed()
    var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
            var region = {
                "brazil": "Brésil",
                "eu-central": "Europe Centrale",
                "singapore": "Singapour",
                "us-central": "U.S",
                "sydney": "Sydney",
                "us-east": "U.S. East",
                "us-south": "U.S. South",
                "us-west": "U.S. West",
                "eu-west": "Western Europe",
                "vip-us-east": "VIP U.S. East",
                "london": "Londre",
                "amsterdam": "Amsterdam",
                "hongkong": "Hong Kong"
            };
      message.reply({embed:
        SinfoEmbed.setAuthor(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL ? message.guild.iconURL() : me.user.displayAvatarURL())
        .setThumbnail(message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
        .setFooter('Saint', client.user.displayAvatarURL())
        .addField("Crée le:", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
        .addField("Créateur:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Region:", region[message.guild.region], true)
        .addField("Members:", message.guild.memberCount, true)
        .addField("Roles:", message.guild.roles.size, true)
        .addField("Channels:", message.guild.channels.size, true)
        .addField("Niveau de vérification:", verifLevels[message.guild.verificationLevel], true)
        .setColor(color)});
    }
   
  module.exports = {
     name: 'server-info',
     aliases: "sinfo",
     prefix: true,
     run: sinfo,
  };
  