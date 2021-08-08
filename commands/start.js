async function cry(client, message)  {
    const {MessageEmbed} = require('discord.js')
    fetch = require("node-fetch");
    if (!message.member.voice.channel) return message.reply(new MessageEmbed({
        color: "#2F3136",
        description: `Tu dois être dans un salon vocal`,
        timestamp: new Date(),
        footer: {
            text: 'Kraken',
            icon_url: client.user.displayAvatarURL()
        }
    }))

    let embeded = await fetch(`https://discord.com/api/v6/channels/${message.member.voice.channel.id}/invites`, {
        method: 'POST',
        headers: {
            "Authorization": `Bot ${client.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "target_type": 2,
            "target_application_id": "755600276941176913"
        })
    }).then(async (res) => await res.json())

    message.reply(new MessageEmbed({
        color: "BLUE",
        author: {
            icon_url: message.author.displayAvatarURL({
                dynamic: true
            }),
            name: "Channel crée"
        },
        description: `> [Clic ici](https://discord.gg/${embeded.code}) pour rejoindre.`,
        timestamp: new Date(),
        footer: {
            text: client.user.username,
            icon_url: client.user.displayAvatarURL()
        }
    }))
    }
    module.exports = {
       name: 'start',
       prefix: true,
       run: cry,
    };
  