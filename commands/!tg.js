function tg(client, msg)  {
    const Discord = require('discord.js')
    if(msg.channel.name === "「💬」atlantis") return
    const tg = [
      "https://media1.tenor.com/images/b878cff652285b14f1a9f02b0db52e47/tenor.gif?itemid=16482422",
      "https://i.imgur.com/Gax10nz.png",
      "https://i.imgur.com/RF9fAGL.png",
      "https://i.imgur.com/ipFR6ec.png",
      "https://media1.giphy.com/media/9xojgLD40rCDe/source.gif",
      "https://media1.tenor.com/images/6526a298ebad803079c98e73ba7d1b65/tenor.gif?itemid=5034312",
      "https://i.gifer.com/ERFE.gif",
      "https://media1.tenor.com/images/ff3988e7bec0c79ce7250852dc5ede93/tenor.gif?itemid=5034362",
      "https://i.gifer.com/An4u.gif",
      "https://i.imgur.com/5coH7Gj.gif",
      "https://media1.tenor.com/images/854b448dd372e2a5d5f0674d32202ce2/tenor.gif?itemid=13591663",
    ]
    let args = msg.content.split(' ').slice(1)
    let cible = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
    if(cible){
      var lew = new Discord.MessageEmbed()
          msg.channel.send({embed:
          lew.setTimestamp(client.user.avatarURL())
          .setDescription(`**Ce message t'es adréssé ${cible} !**`)
          .setImage(tg[Math.floor(Math.random() * tg.length).toString(16)])
        .setColor("RANDOM")});
    }
    else{
        var lews = new Discord.MessageEmbed()
          msg.reply({embed:
          lews.setTimestamp(client.user.avatarURL())
          .setImage(tg[Math.floor(Math.random() * tg.length).toString(16)])
        .setColor("RANDOM")});
    }
}
  module.exports = {
     name: 'tg',
     run: tg,
  };
  
  