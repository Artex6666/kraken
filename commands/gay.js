async function gay (bot, message) {
    const Discord = require("discord.js")

    //const DIG = require("discord-image-generation");

        //let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });

       // let img = await new DIG.Gay().getImage(avatar)
    let memberToFind = message.mentions.members.first() ||message.content.split(" ").slice(1).join(" ")|| message.author;
    let gay = Math.round(Math.random() * 105);
    let gayembed = new Discord.MessageEmbed()
        .setColor("#f442d4")
        .setDescription(`:gay_pride_flag: **Je pense que ${memberToFind} est ${gay}% gay!** :gay_pride_flag:`)
        //.setThumbnail(img);
    
    message.channel.send(gayembed);
};

module.exports = {
    name: 'gay',
    run: gay,
    prefix:true,
};
