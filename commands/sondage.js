function sondage (client, message) {
    const Discord = require("discord.js")
    var question = message.content.split(" ").slice(1).join(" ");
    message.delete()
    if(!question) return message.reply("**Quelle est la question?** *(<sondage [question])*")
    const embed = new Discord.MessageEmbed()
    .setTitle("πΊππππππ")
    .setColor("RANDOM")
    .setDescription(question)
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL());
    
    try {
    message.channel.send(embed).then(message => 
        message.react("791446582998204426") && 
        message.react("791446582755196958")&&
        message.react("1οΈβ£")&&
        message.react("2οΈβ£")&&
        message.react("3οΈβ£")&&
        message.react("4οΈβ£")&&
        message.react("5οΈβ£")
        )
    }
    catch(error){
        console.log(error);
    }
};

module.exports = {
    name: 'sondage',
    run: sondage,
    prefix:true,
};
