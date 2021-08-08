function lettre(client, msg){
    args = msg.content.split(' ').slice(1)
    require("colors")
    let annivcible = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
    msg.delete()
    const Discord = require('discord.js')
    
    let embedciblenull = new Discord.MessageEmbed()
    .setTitle('**Cadeau**')
    .setColor("#e642c9")
    .setDescription("**Il faut choisir à qui envoyer la lettre anonyme enfin!**")
    .setFooter('.',client.user.displayAvatarURL());

    if(!annivcible) return msg.author.send(embedciblenull)

    let pasdemess = new Discord.MessageEmbed()
    .setTitle("**Lettre**")
    .setColor("#e642c9")
    .setDescription("**Il faut ajouter du contenu à la lettre enfin!**")
    .setFooter('.',client.user.avatarURL());

    let cadeaurecu = new Discord.MessageEmbed()
    .setTitle('**Lettre**')
    .setColor('#e642c9')
    .setThumbnail(annivcible.user.avatarURL)
    .setDescription("**Lettre anonyme reçu!**")
    .setImage("https://cdn-s-www.estrepublicain.fr/images/5094081C-27CE-4F11-90D9-777E11934E02/NW_raw/jules-mourey-sa-lettre-du-17-mai-1917-1489141246.jpg")
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp(new Date());
    
    let ciblerecuavecmess = new Discord.MessageEmbed()
    .setTitle('**Cadeau**')
    .setColor('#e642c9')
    .setDescription(`**Tu as reçu une lettre anonyme!**`)
    .addField(`**Contenu:**`, `||${args.slice(1).join(' ')}||`)
    .setImage("https://i.imgur.com/cS1I2th.png")
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp(new Date());
    let messagedelettre = args.slice(1).join(' ')
    if(!messagedelettre) return msg.author.send(pasdemess)
    else{
        msg.author.send("**Envoie de la lettre!....**")
        try {
            annivcible.send(ciblerecuavecmess)
            console.log(`Lettre anonyme de ${msg.author.tag} (ID: ${msg.author.id}) à ${annivcible.user.tag} (ID: ${msg.author.id}): `.red + messagedelettre)
            msg.author.send(cadeaurecu)
        } catch (error) {
            msg.author.send("**La personne a bloqué ses dm /le bot, le message n'as donc pas été reçu**")
        }
    }
    }
    
    module.exports = {
        name: 'lettre',
        run: lettre,
        prefix:true,
    };
    