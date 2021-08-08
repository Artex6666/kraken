function cadeau(client, msg){
msg.delete()
args = msg.content.split(' ').slice(1)
let annivcible = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
const Discord = require('discord.js')
let embedciblenull = new Discord.MessageEmbed()
.setTitle('**Cadeau**')
.setColor('RANDOM')
.setDescription("**Il faut choisir à qui donner le cadeau enfin!**")
.setFooter('.',client.user.displayAvatarURL());
if(!annivcible) return msg.reply(embedciblenull)

let cadeaurecu = new Discord.MessageEmbed()
.setTitle('**Cadeau**')
.setColor('RANDOM')
.setThumbnail(annivcible.user.displayAvatarURL())
.setDescription("**Cadeau reçu!**")
.setImage("https://www.nostalgift.com/wp-content/uploads/2017/07/cadeau-collector.png")
.setFooter('.',client.user.displayAvatarURL());


let ciblerecusansmess = new Discord.MessageEmbed()
.setTitle('**Cadeau**')
.setColor('RANDOM')
.setDescription(`**Tu as reçu un cadeau de la part de ${msg.author}**`)
.setImage("https://www.manager-go.com/assets/Uploads/_resampled/ResizedImageWzc1OSw0NTld/cadeau-entreprise-min.jpg")
.setFooter('.',client.user.displayAvatarURL());


let ciblerecuavecmess = new Discord.MessageEmbed()
.setTitle('**Cadeau**')
.setColor('RANDOM')
.setDescription(`**Tu as reçu un cadeau de la part de ${msg.author}**`)
.addField(`***Bonne nouvelle, tu as découvert un message caché dans le cadeau:***`, `||${args.slice(1).join(' ')}||`)
.setImage("https://www.manager-go.com/assets/Uploads/_resampled/ResizedImageWzc1OSw0NTld/cadeau-entreprise-min.jpg")
.setFooter('.',client.user.displayAvatarURL());


msg.reply("**Envoie du cadeau....**")
let messagedecadeau = args.slice(1).join(' ')
if(!messagedecadeau){ annivcible.send(ciblerecusansmess)}
else{
    annivcible.send(ciblerecuavecmess)
    console.log(`cadeau de ${msg.author.tag} (ID: ${msg.author.id})à ${annivcible.user.tag} (ID: ${msg.author.id}): `+ messagedecadeau)
}
msg.channel.send(cadeaurecu)
}

module.exports = {
    name: 'cadeau',
    run: cadeau,
    prefix:true,
};
