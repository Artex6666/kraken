function relaod(client, message){
    const fs = require('fs');
    if(message.author.id !== "444846310407798785") return
    const Discord = require("discord.js")
    let embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter('.',client.user.displayAvatarURL())
    .setTimestamp()

fs.readdir("./commands/", (err, files) => 
{
  if (err) console.error(err);
  
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return embed.setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**').setDescription("**Aucune commande à montrer :'(**"), message.reply(embed);
/*
  jsfiles.forEach((f, i) => {
    let props = require(`commands/${f}`);
    console.dir(props)
    console.log(`${i + 1}: ${f} chargé`);
    if(props.prefix)
    {
      _CODE[PREFIX + props.name] = props;
    }
    else _CODE[props.name] = props;
});*/
    embed.setTitle(`**<a:pandarendlargent:793977672086061096>Liste des ${jsfiles.length} commandes:<a:pandarendlargent:793977672086061096>**`)
    .setDescription(` *\`${jsfiles}\`* `)
    .setColor("YELLOW")
    .setAuthor("by 𝙰𝚛𝚝𝚎𝚡✴ | [ ĐΞV ]", "https://cdn.discordapp.com/avatars/444846310407798785/a_e208c71dc69e80754c82c2f8321b0da1.gif?size=1024")
    message.channel.send(embed)

});
  };
module.exports = {
    name: 'liste-cmd',
    prefix: true,
    run: relaod,
 };

