/*var readline = require('readline'); 
const fs = require("fs")
var dtb = JSON.parse(fs.readFileSync("../talk.json", "utf-8"))
console.log(dtb)

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//commande be like: "<talk texte -> réponse"

rl.question("Message type: ", function(msg.content) { 
    let msg_split = msg.content.split(" ").splice(1).join(" ")
    var question = msg_split.split("->")[0].trim()
    var réponses = msg_split.split("->").splice(1).map(quest => quest.trim())
    var array = {
        "question": question,
        "réponses": réponses,
        "créateur": "artexou",
        "date": new Date().toLocaleDateString()
    }
    dtb.push(array)
    fs.writeFile("../talk.json", JSON.stringify(dtb, null,2), err => {
        if(err) console.log(err)
    })
  rl.close(); 
})
*/
/* let msg = {}
msg.content = "mon message"
var réponsestotal = []
let msgdtb = dtb.forEach(element => {
  réponsestotal.push(element.réponses.split(""))
});
let msgbase = msg.content.split("")
for(i = 0; i < réponsestotal.length; i ++){

} */
////////////////////////////////////////////////////////////////////////////////////////////////////
function talk(client, msg){
  const fs = require("fs")
  var bl = JSON.parse(fs.readFileSync("./dtb.json", "utf-8"))

  var bl= ["792081551466037308"]
  const Discord = require('discord.js')
  const valid = "<a:valid:791446582998204426>"
  const nop = "<a:non:791446582755196958>"
if(bl.indexOf(msg.author.id) != -1) return msg.author.send("**Tu as été blacklisté de la commande talk si tu penses qu'il sagit d'une erreur contacte un administateur**")
var dtb = JSON.parse(fs.readFileSync("./talk.json", "utf-8"))

function allCharactersSame(str)
{
  var str = str.toString().split("")
  var count = 0
  var ar = []
  var b = 0
  for(i = 1 ; i<str.length;i++ ){
    if(str[b]=== str[i]){

      count++
      let data = {
        "lettre": str[i],
        "nombre": count
      }
      ar.push(data)
    }
    b++
}
    if(ar[ar.length-1]){
      return ar[ar.length-1].nombre
    }
    else{
      return false
    }
}

    let msg_split = msg.content.split(" ").splice(1).join(" ")

      if(msg_split.split(" ")[0].toLowerCase() === "/rm"){
        if(msg.guild.id === "712286729985327116"){
          if(msg.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){
            let _quest = msg_split.split(" ").splice(1).join(" ")
            let checkQuest = dtb.findIndex((obj => obj.question.trim().toLowerCase() === _quest.trim().toLowerCase()));
            let embederror = new Discord.MessageEmbed()
            .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
            .setDescription("**Aucune question trouvée :(**")
            .setColor("RANDOM")
            .setFooter('.',client.user.displayAvatarURL());
              if(checkQuest === -1 )  return msg.reply(embederror)
              console.log(`${dtb[checkQuest]} supprimée par ${msg.author.tag}`)
              dtb.splice(checkQuest, 1)
              fs.writeFile("./talk.json", JSON.stringify(dtb, null,2), err => {
                if(err) console.log(err)
            })
              let embed = new Discord.MessageEmbed()
                    .setTitle(`${valid}`)
                    .setDescription(`**Question: "${_quest}" a bien été enlevée par <@${msg.author.id}>**`)
                    .setColor("GREEN")
                    .setTimestamp();
              msg.channel.send(embed)
              let logs = msg.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
              if(logs){
                logs.send(embed)
              }
          }else return msg.reply("pas assez de perm")
        }
        return
      }
      if(msg_split.split(" ")[0].toLowerCase() === "/bl"){
        if(msg.guild.id === "712286729985327116"){
          if(msg.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){

            let cible = msg.mentions.members.first() || msg.guild.members.cache.get(msg_split.split(" ")[2]) 
            let embederror = new Discord.MessageEmbed()
            .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
            .setDescription("**Aucun membre trouvé :(**")
            .setColor("RED")
            .setFooter('.',client.user.displayAvatarURL());
            if(!cible) return msg.reply(embederror)

              if(msg_split.split(" ")[1].toLowerCase()=== "add"){

                bl.bl_talk.push(cible)
                fs.writeFile("./dtb.json", JSON.stringify(dtb, null,2), err => {
                  if(err) console.log(err)
                })
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${valid}`)
                    .setDescription(`**Question: "${_quest}" a bien été enlevée par <@${msg.author.id}>**`)
                    .setColor("GREEN")
                    .setTimestamp();
                msg.reply(embed)
                let logs = msg.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
                if(logs){
                  logs.send(embed)
                }
              }
              if(msg_split.split(" ")[1].toLowerCase()=== "rm"){

            let checkQuest = bl.findIndex((obj => obj.bl_talk === cible));
            let embederror = new Discord.MessageEmbed()
            .setTitle(`${nop}**[𝐄𝐫𝐫𝐞𝐮𝐫]**${nop}`)
            .setDescription("**Aucun membre trouvé :(**")
            .setColor("RANDOM")
            .setFooter('.',client.user.displayAvatarURL());
              if(checkQuest === -1 )  return msg.reply(embederror)
              console.log(`${bl.bl_talk[checkQuest]} supprimée par ${msg.author.tag}`)
              bl.bl_talk.splice(checkQuest, 1)
              fs.writeFile("./dtb.json", JSON.stringify(bl, null,2), err => {
                if(err) console.log(err)
            })
              let embed = new Discord.MessageEmbed()
                    .setTitle(`${valid}`)
                    .setDescription(`**Question: "${_quest}" a bien été enlevée par <@${msg.author.id}>**`)
                    .setColor("GREEN")
                    .setTimestamp();
              msg.channel.send(embed)
              let logs = msg.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
              if(logs){
                logs.send(embed)
              }
              }
          }else return msg.reply("pas assez de perm")
        }
      }
    if(msg_split.length > 200) return msg.author.send("message trop long cmort")
    var question = msg_split.split("->")[0].trim().toLowerCase()
    var réponses = msg_split.split("->").splice(1).map(quest => quest.trim())
    if(réponses.length === 0) return msg.reply("mauvais usage de la commande: <talk question -> réponse")
    if(!question) return msg.author.send("mauvais usage de la commande: <talk question -> réponse")
    if(allCharactersSame(msg_split)){
      if(allCharactersSame(msg_split)> 0.5*msg_split.length) return msg.author.send("bah nan mdrr le flood c'es pas autorisé ici non plus ;)")
    }
    if(msg.content.includes("@everyone"))return msg.channel.send("ok tu fais chier t'es kick"), msg.guild.members.cache.get(msg.author.id).kick("fais trop chier à essayer de ping everyone"), msg.author.send("https://discord.gg/XuEb9BhdRH")
    if(msg.content.includes("@here"))return msg.channel.send("ok tu fais chier t'es kick").then(msg => msg.guild.members.cache.get(msg.author.id).kick("fais trop chier à essayer de ping everyone"))
    if(msg.mentions.roles.first()) return msg.channel.send("ok tu fais chier t'es kick").then(msg => msg.guild.members.cache.get(msg.author.id).kick("fais trop chier à essayer de ping everyone"))
    if(msg.content.includes("<@&")) return msg.channel.send("ok tu fais chier t'es kick").then(msg => msg.guild.members.cache.get(msg.author.id).kick("fais trop chier à essayer de ping everyon"))
    let objIndex = dtb.findIndex((obj => obj.question === question));

    if(objIndex >-1){
      let totalrep = [...new Set(dtb[objIndex].réponses.concat(réponses))]
    var array = {
        "question": question,
        "réponses": totalrep,
        "créateur": `old: ${dtb[objIndex].créateur} last: ${msg.author.tag} ${msg.author.id} (new : ${réponses})`,
        "date": new Date().toLocaleDateString()
    }
    dtb[objIndex] = array
  }else{
    let totalrep = [...new Set(réponses)]
    var array = {
        "question": question,
        "réponses": réponses,
        "créateur": `${msg.author.tag} ${msg.author.id} (${totalrep})`,
        "date": new Date().toLocaleDateString()
    }
    dtb.push(array)
  }
    fs.writeFile("./talk.json", JSON.stringify(dtb, null,2), err => {
        if(err) console.log(err)
    })
    msg.channel.send("Réponse ajoutée!")
  }
    module.exports = {
       name: 'talk',
       aliases: ["tk"],
       prefix:true,
       run: talk,
    };
  