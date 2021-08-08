const fs = require("fs");
const discord = require("discord.js")
const config = require("./config.json");
require("colors")
const {Client, MessageEmbed} = require('discord.js');
const client = new Client({ partials : ['MESSAGE','CHANNEL','REACTION']})
const PREFIX = config.prefix
_SAINTS = {AFK: {},}


console.log("connexion en cours")
client.login(config.token);{
  console.log('préfix actuel: ' + PREFIX)}

client.on("ready", async () => {
  console.log(`${client.user.username} est connecté!`);
  client.user.setActivity("prefix: <")/*
  const embedreglement = new discord.MessageEmbed()
    .setDescription("***Cliquez sous les réactions ci-dessous afin d'obtenir les roles de streaming. Si vous avez quittez vous devez decocher et recocher l'emoji.***") 
    .addField("`Séries:`", "<a:sapin:794319550220337152>", true)
    .addField("`Animés:`", "<:yesanime:790656951003774986>", true)
    .setColor("GREEN")
    .addField("`Films:`", "<:trinque:793880350387863562>",true)
    .setTimestamp()
    .setFooter('.',client.user.displayAvatarURL());
  let paradisa = client.guilds.cache.get("712286729985327116")
  let salon = paradisa.channels.cache.get("809159261585145897")
  salon.send(embedreglement).then(msg => msg.react("790656951003774986") && msg.react("793880350387863562") &&msg.react("794319550220337152"))
  */
});


client.on("messageUpdate", (oldMessage, newMessage) => {
  try {
    if(!oldMessage || ! oldMessage.author || oldMessage.author.bot) return
    let logs = oldMessage.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵")
    if(!logs)return;
    let embed = new discord.MessageEmbed()
    .setTitle('**Discord message edit log:**')
    .setColor("ORANGE")
    .setDescription(`**L'utilisateur ${oldMessage.author} a edité son message dans dans ${oldMessage.channel}:**\n\n**Ancien contenu:** \`\`\`${oldMessage}\`\`\`\n**Nouveau contenu:** \`\`\`${newMessage}\`\`\``)
  
    try {
      logs.send(embed)
    }
    catch (error) { 
      console.log(error)};
  } catch (error) {
    console.log(error)   
  }
 
});

client.on("messageReactionAdd", async (reaction, user) => {

  if(reaction.message.channel.id = "790640933019844660"){
    if(reaction._emoji.id === "792242661649940480"){
  if (user.bot) return; 
  reaction.message.guild.member(user).roles.add('831001928494088254').catch(console.error())
  user.send("> **Bienvenue sur atlantide cher coquillage égarré! ;)**")
    }else return
  }
      })

client.on("messageReactionRemove", async (reaction, user) => {
  if(reaction.message.channel.id = "790640933019844660"){
  if(reaction._emoji.id === "792242661649940480"){
  if (user.bot) return; 
  reaction.message.guild.member(user).roles.remove('831001928494088254').catch(console.error())
    }else return
  }
      })



client.on('messageDelete', async message => {
  if(!message || ! message.author || message.author.bot) return
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return 
	const { executor, target } = deletionLog;

  
  let logs = message.guild.channels.cache.find(channels => channels.name === "「🧠」𝑴𝑶𝑫𝑬𝑹𝑨𝑻𝑰𝑶𝑵");
  if(!logs)return;
  if(target.id === message.author.id){
    let embed = new discord.MessageEmbed()
    .setTitle('**Discord message delete log:**')
    .setColor("#e4b400")
    .setDescription(`**Message de ${message.author} supprimé par ${executor.tag} dans ${message.channel}:** \`\`\`${message.content}\`\`\``)
    try {
      logs.send(embed)
    }
    catch (error) { 
      console.log(error)};
  }else{
  let embed = new discord.MessageEmbed()
  .setTitle('**Discord message delete log:**')
  .setColor("#e4b400")
  .setDescription(`**${message.author} a supprimé son message dans ${message.channel}:** \`\`\`${message.content}\`\`\``)
  
  try {
    logs.send(embed)
  }
  catch (error) { 
    console.log(error)};
  }
});

client.on("voiceStateUpdate", (oldState, newState) => {
 var user = client.users.cache.get(newState.id);
 var channelf = client.channels.cache.get(oldState.channelID);
  if(newState.bot) return;
  if(newState.channelID === "830997732273553468") {
  newState.guild.channels.create(`Salon de ${user.username}`, {
    type: "voice",
    parent: "830999181459849247",
    permissionOverwrites: [
      {
        id: user.id,
        allow: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
     },
     {
      id: "790640990351392828",
      allow: ["MANAGE_CHANNELS", "MANAGE_ROLES", "VIEW_CHANNEL", "CONNECT"],
     },
   ],
  })
    .then((channel) => {
    newState.guild.member(user).voice.setChannel(channel)
  })
}
  if(oldState) {
    let filter = (ch) =>
        (ch.parentID == "830999181459849247")
        && (ch.id != "830997732273553468")
        && (oldState.channelID == ch.id)
        && (channelf.members.size == 0);
    
    return oldState.guild.channels.cache
        .filter(filter)
        .forEach((ch) => ch.delete());
}
});

client.on("guildMemberAdd", member => {
  let yolo = client.guilds.cache.get("712286729985327116")
  let membersCount = yolo.memberCount
  let memberCountsalon = yolo.channels.cache.get("830999837142810674")
  memberCountsalon.setName('𝐌𝐞𝐦𝐛𝐫𝐞𝐬: ' + membersCount).catch(error => console.log(error))
  console.log(`${yolo.name} Membres: ${membersCount}`)

  /*
  if(member.bot) return

  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const inviter = client.users.cache.get(guildInvites.member.id);
    const logChannel = member.guild.channels.cache.find(channel => channel.name === "「👋」nouveaux");
    const userInvites = guildInvites.array().filter(o => o.inviter.id === user.id);
    var userInviteCount = 0;
    for(var i=0; i < userInvites.length; i++)
    {
        var _invite = userInvites[i];
        userInviteCount += _invite['uses'];
    }
    var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*Un nouveau membre nommé **${member.user.tag}** a rejoint l' :trident:・𝐀𝐓𝐋𝐀𝐍𝐓𝐈𝐃𝐄, il a été invité par **${inviter.tag}**, (**${userInviteCount}** invites)* :tada:`);
    logChannel.send(embed);
  })*/
})
client.on("guildMemberRemove", member => {
  let yolo = client.guilds.cache.get("712286729985327116")
  let membersCount = yolo.memberCount
  let memberCountsalon = yolo.channels.cache.get("830999837142810674")
  memberCountsalon.setName('𝐌𝐞𝐦𝐛𝐫𝐞𝐬: ' + membersCount).catch(error => console.log(error))
  console.log(`${yolo.name} Membres: ${membersCount}`)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const usersEveryoneMap = new Map();

client.on('message', async message => {
if(message.mentions.everyone) {
if(usersEveryoneMap.has(message.author.id)) {
const userData = usersEveryoneMap.get(message.author.id)
var {numberEveryoneSent} = userData;
 numberEveryoneSent += 1;
userData.numberEveryoneSent = numberEveryoneSent
usersEveryoneMap.set(message.author.id, userData)
if (numberEveryoneSent >= 2) {
    message.delete();
}
if (numberEveryoneSent === 4) {
    message.guild.member(message.author.id).ban({days: 7, reason: "ANTI-RAID -> mass ping everyone"})
    message.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${message.author} (ID: ${message.author.id} \n > **Raison:** Mass ping everyone)`)
    }
}
else {
usersEveryoneMap.set(message.author.id, { 
    numberEveryoneSent: 1
}); 
}
setTimeout(() => {
  usersEveryoneMap.delete(message.author.id); 
}, 60000);
}
})

client.on('channelCreate', async channel => {
  if(Object.values(channel)[0] === "dm") return
  
  const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"}); 

  if (!AuditLogFetch.entries.first()) return console.error(`Aucune personne trouvée`)

  const Entry = AuditLogFetch.entries.first();
  if(Entry.executor.id === client.user.id)return 
    if(usersEveryoneMap.has(Entry.executor.id)) {
    const userData = usersEveryoneMap.get(Entry.executor.id)
    var {numberEveryoneSent} = userData;
     numberEveryoneSent += 1;
    userData.numberEveryoneSent = numberEveryoneSent
    usersEveryoneMap.set(Entry.executor.id, userData) 
    if (numberEveryoneSent >= 2) {
      if(channel.name.includes("raid") === "raid")
      channel.guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass create channels"}).catch(error => channel.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass create channel \n **Erreur:** ${error}`))
  }
    if (numberEveryoneSent === 4) {
        channel.guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass create channels"}).catch(error => channel.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass create channel \n **Erreur:** ${error}`))
        channel.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass create channel)`)
        }
    }
    else {
    usersEveryoneMap.set(Entry.executor.id, { 
        numberEveryoneSent: 1
    }); 
    }
    setTimeout(() => {
      usersEveryoneMap.delete(Entry.executor.id); 
    }, 60000);
})
client.on('channelDelete', async channel => {
  if(Object.values(channel)[0] === "dm") return
  
  const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_DELETE"}); 

  if (!AuditLogFetch.entries.first()) return console.error(`Aucune personne trouvée`)

  const Entry = AuditLogFetch.entries.first();
  if(Entry.executor.id === client.user.id) return 
    if(usersEveryoneMap.has(Entry.executor.id)) {
    const userData = usersEveryoneMap.get(Entry.executor.id)
    var {numberEveryoneSent} = userData; 
     numberEveryoneSent += 1;
    userData.numberEveryoneSent = numberEveryoneSent
    usersEveryoneMap.set(Entry.executor.id, userData) 
    if (numberEveryoneSent === 4) {
        channel.guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass delete channels"}).catch(error => channel.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass delete channel \n **Erreur:** ${error}`))
        channel.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass delete channel)`)
        }
    }
    else {
    usersEveryoneMap.set(Entry.executor.id, { 
        numberEveryoneSent: 1
    }); 
    }
    setTimeout(() => {
      usersEveryoneMap.delete(Entry.executor.id); 
    }, 60000);
})
client.on('roleDelete', async role => {
  
  const AuditLogFetch = await role.guild.fetchAuditLogs({limit: 1, type: "ROLE_DELETE"}); 

  if (!AuditLogFetch.entries.first()) return console.error(`Aucune personne trouvée`)

  const Entry = AuditLogFetch.entries.first();
    if(usersEveryoneMap.has(Entry.executor.id)) {
    const userData = usersEveryoneMap.get(Entry.executor.id)
    var {numberEveryoneSent} = userData; 
     numberEveryoneSent += 1;
    userData.numberEveryoneSent = numberEveryoneSent
    usersEveryoneMap.set(Entry.executor.id, userData) 
    if (numberEveryoneSent === 4) {
        role.guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass delete roles"}).catch(error => role.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass delete roles \n **Erreur:** ${error}`))
        role.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass delete roles`)
        } 
    }
    else {
    usersEveryoneMap.set(Entry.executor.id, { 
        numberEveryoneSent: 1
    }); 
    }
    setTimeout(() => {
      usersEveryoneMap.delete(Entry.executor.id); 
    }, 60000);
})

client.on('roleCreate', async role => {
  
  const AuditLogFetch = await role.guild.fetchAuditLogs({limit: 1, type: "ROLE_CREATE"}); 

  if (!AuditLogFetch.entries.first()) return console.error(`Aucune personne trouvée`)

  const Entry = AuditLogFetch.entries.first();
    if(usersEveryoneMap.has(Entry.executor.id)) {
    const userData = usersEveryoneMap.get(Entry.executor.id)
    var {numberEveryoneSent} = userData; 
     numberEveryoneSent += 1;
    userData.numberEveryoneSent = numberEveryoneSent
    usersEveryoneMap.set(Entry.executor.id, userData) 
    if (numberEveryoneSent === 4) {
        role.guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass create roles"}).catch(error => role.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass create roles \n **Erreur:** ${error}`))
        role.guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass create roles`)
        } 
    }
    else {
    usersEveryoneMap.set(Entry.executor.id, { 
        numberEveryoneSent: 1
    }); 
    }
    setTimeout(() => {
      usersEveryoneMap.delete(Entry.executor.id); 
    }, 60000);
})
client.on('guildBanAdd', async (guild,user) => {
  const AuditLogFetch = await guild.fetchAuditLogs({limit: 1, type: "MEMBER_BAN_ADD"}); 

  if (!AuditLogFetch.entries.first()) return console.error(`Aucune personne trouvée`)
  const Entry = AuditLogFetch.entries.first();
    if(usersEveryoneMap.has(Entry.executor.id)) {
    const userData = usersEveryoneMap.get(Entry.executor.id)
    var {numberEveryoneSent} = userData; 
     numberEveryoneSent += 1;
    userData.numberEveryoneSent = numberEveryoneSent
    usersEveryoneMap.set(Entry.executor.id, userData) 
    if (numberEveryoneSent === 4) {
        guild.member(Entry.executor.id).ban({days: 7, reason: "ANTI-RAID -> mass ban"}).catch(error => guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass ban \n **Erreur:** ${error}`))
        guild.owner.send(`:warning: **TENTATIVE DE RAID DEFENDUE** :warning:  \n > membre banni: ${Entry.executor} (ID: ${Entry.executor.id} )\n > **Raison:** Mass ban`)
        } 
    }
    else {
    usersEveryoneMap.set(Entry.executor.id, { 
        numberEveryoneSent: 1
    }); 
    }
    setTimeout(() => {
      usersEveryoneMap.delete(Entry.executor.id); 
    }, 60000);
}) 


client.queue = new Map()
client.commands = new discord.Collection();
client.aliases = new discord.Collection()


fs.readdir("./commands/", (err, files) => 
{

  if (err) console.error(err);
  
  var jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("Aucune commande à charger.");

  console.log(`Chargement de ${jsfiles.length} commandes...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.dir(props)
    console.log(`${i + 1}: ${f} chargé`);
    if(props.prefix)
    {
      client.commands.set(PREFIX + props.name, props)
    
    }
    else client.commands.set(props.name, props)

    if(props.aliases){
      if(props.prefix){
        client.aliases.set(PREFIX + props.aliases, props)
      }else client.aliases.set(props.aliases, props)
    }
  });

});


client.on("message", async msg => 
{  
  if(msg.channel.type === "dm")return
  if(msg.content.startsWith(PREFIX+"restart")){
    if(msg.author.id != "444846310407798785") return
      msg.delete()
      msg.channel.send('**redémarrage** du bot...').then(msg => client.destroy()).then(() => client.login(config.token), msg.channel.send(":white_check_mark:"))
  }
  if(msg.content.startsWith(PREFIX+"exit")){
    if(msg.author.id != "444846310407798785") return
      msg.delete()
      msg.channel.send('bot coupé').then(msg => client.destroy())
  }
  if(msg.content.startsWith(PREFIX+"reload")){
    if(msg.author.id != "444846310407798785") return
    let commandes = Object.keys(client.commands)
    console.log(commandes)
      msg.delete()
      var commandName = msg.content.split(" ").splice(1)[0];
      if(!commandName) return msg.reply("nom de la commande?");


      if(commandes.indexOf(commandName) === -1) {d
        return msg.reply("commande inconnue");
      }
      delete require.cache[require.resolve(`./${commandName}.js`)];
      _CODE.delete(commandName);
      const props = require(`./${commandName}.js`);
      _CODE.set(commandName, props);
      msg.reply(`cbon`);
  }

/*
if(msg.mentions.has(client.user)){
  if(msg.content.includes(`<@!${client.user.id}>`)){
    var msgnobot = msg.content.replace(`<@!${client.user.id}>`, "").toLowerCase().trim()
  }else {
  var msgnobot = msg.content.replace(client.user, "").toLowerCase().trim()
  }*/
if(msg.author.bot){
  return
}
var dtb = JSON.parse(fs.readFileSync("./talk.json", "utf-8"))
  // let question = dtb.find(quest => quest.question.toLowerCase() === msgnobot)
  let question = dtb.find(quest => quest.question.toLowerCase() === msg.content.toLowerCase().trim())
  if(question)
  {
    let rep = question.réponses
    if(rep.length >0)
    {
      rep = rep[Math.floor(Math.random() * rep.length)].toString()
    }
    else
    {
      rep = rep[0]
    }
    if(!msg.channel) return
    console.log("[*] before:",msg.channel.name, "-", rep)
    msg.channel.send(rep)
    console.log("[*] after:",msg.channel.name, "-", rep)
/*
    msg.guild.channels.cache.get(msg.channel.id).send(rep)
     console.log("[*] before:",msg.channel.name, "-", rep)
     msg.channel.send(rep).then(msg => {
       if(msg.channel.id = "790640933019844660") msg.delete()
     })
     console.log("[*] after:",msg.channel.name, "-", rep)*/
  }


/*if(msg.content === "adminmode"){
  msg.delete()
  let embedkick = new discord.MessageEmbed()
  .setTitle("**Tu as été kick pour débilité**")
  .setDescription("Si tu veux contester ton ban rejoins ce serveur : https://discord.gg/srezKxu")
  .setTimestamp()
  .setColor("RED")
  .setFooter(".", client.user.displayAvatarURL);
  msg.author.send(embedkick)
  msg.member.kick({
    reason: "adminmode",
  }).then(() => {
    msg.channel.send(`> **${msg.author} a été /kill**`)
    let logs = msg.guild.channels.get("684877249568178186")
    const bam = new discord.MessageEmbed()
    logs.send({embed:
        bam.setFooter('.',client.user.avatarURL)
        .setTitle(`**${msg.author} a été kick pour débilité, message:`)
        .setDescription("```\n"+ `${msg.content}\n` +"```")
        .setColor("RED")});
  }) 
}*/
var embed = new MessageEmbed()
    .setTimestamp()
    .setFooter('.',client.user.displayAvatarURL())
    .setTitle('**<a:non:791446582755196958> [𝐄𝐫𝐫𝐞𝐮𝐫] <a:non:791446582755196958>**')
    .setColor('RED');


var d = new Date(Date.now());

//checkMsg(client, msg, _SAINTS);

var msgcmd = msg.content.split(" ")[0].toLowerCase();
//if(msgcmd != "<tk") return
var commande = client.commands.get(msgcmd) || client.aliases.get(msgcmd);
if(commande)
{
  try {
    commande.run(client, msg, _SAINTS)
    console.log(`-`.blue.bold + ` Commande `.yellow + msgcmd.cyan.bold + ` éffectuée le ${d.toLocaleDateString()} dans `.yellow + `#${msg.channel.name} (ID:${msg.channel.id}), Serveur: ${msg.guild.name} (ID:${msg.guild.id})`.green + ` par ${msg.author.tag} (ID: ${msg.author.id})`.red)
  } catch (error) {
    console.error(error);
    if(msg && msg.reply && typeof msg.reply == "function") {
      msg.reply(embed.setDescription(error.toString().replace("TypeError:", "**Erreur: **")))
      console.log(error)
    }else{
      console.error(`msg inexistant \n${error}`)
    }
  }

}
});

/*
function checkMsg(client, message, _SAINTS)
{
if (message.content.includes(message.mentions.users.first()))
{
  if(!message.author.bot){
  if(_SAINTS.AFK[message.mentions.users.first().id])
  {
    var _user = _SAINTS.AFK[message.mentions.users.first().id]
      message.guild.fetchMember(_user.id).then(member => {
        message.channel.send(`> ${_user.raison}`).then(msg => msg.delete(10000));
       
      });
  }}
}
}*/
