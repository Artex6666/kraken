function pp (client, message){
    const Discord = require('discord.js')
    if(!message.member.hasPermission('ADD_REACTIONS')){
        if(message.channel.name != "〔🚬〕cmds-bot") return message.reply("**Etant donné ta position de simple membre sois gentil(le) et va dans #〔🚬〕cmds-bot**")
    }
    let args = message.content.split(" ").slice(1).join(" ");
    let UserInfo = message.mentions.members.first() || message.member;
    let pp_embed = new Discord.MessageEmbed()
    .setTitle('Photo De Profil')
    .setTimestamp(new Date())
    .setColor('RANDOM')
    .addField('Lien:', `[lien](${UserInfo.user.displayAvatarURL({dynamic : true, size:1024})})`)
    .setImage(UserInfo.user.displayAvatarURL({dynamic : true, size: 1024}));
    message.reply(pp_embed)

}
module.exports = {
    name: 'pp',
    run: pp,
    prefix:true,
};
