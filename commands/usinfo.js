function uinfo(client, message)  {
    function checkDays(date) {
        var now = new Date();
        var diff = now.getTime() - date.getTime();
        var days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    const Discord = require('discord.js')
    let color = "RANDOM"
    let msg= message;
        var UinfoEmbed = new Discord.MessageEmbed()
        var user = message.mentions.users.first()
        if (!user) {
        msg += "Aucun utilisateur valide.\n";
        user = message.author;
        } else if (!user) {
        user = message.author;
        }
        var userGuild = (message.guild.member(user));
                  var game = user.presence.game;
                  var gameName = game ? game.name : "Rien";
                  var userRoles = (!userGuild ? null : userGuild.roles.array());
                  if (userGuild) {
                      userRoles.shift(); 
                      for (var i = 0; i < userRoles.length; ++i) {
                          userRoles[i] = userRoles[i].name;
                      }
                      userRoles = userRoles.join(", ");
                  }
                  var status = {
                      dnd: "Ne pas déranger",
                      offline: "Offline/Invisible",
                      online: "Connecté",
                      idle: "Idle"
                  };
      message.reply({embed:
        UinfoEmbed.setAuthor(`${user.username}#${user.discriminator} | ${user.id}`, user.displayAvatarURL())
                    .setFooter("")
                     .setThumbnail(user.displayAvatarURL())
                     .setColor(color)
                     .addField("Crée", `${user.createdAt.toString().substr(0, 15)},\n${checkDays(user.createdAt)}`, true)
                     .addField("Rejoins", `${userGuild.joinedAt.toString().substr(0, 15)},\n${checkDays(userGuild.joinedAt)}`, true)
                     .addField("Status", status[user.presence.status], true)
                     .addField("Joue", gameName, true)
                     .addField("Nickname", userGuild.nickname ? userGuild.nickname : "None", true)
                     .addField("Avatar URL", `[lien](${user.displayAvatarURL()})`, true)
                     .addField("Roles", userRoles ? userRoles : "None")
      })}
    
  module.exports = {
     name: 'user-info',         
     aliases: "uinfo",
     prefix: true,
     run: uinfo,
  };
  