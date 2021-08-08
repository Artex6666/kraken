function meme(client, message){
    const Discord = require("discord.js")
    let embed = new Discord.MessageEmbed()
    .setTitle('**[𝐄𝐫𝐫𝐞𝐮𝐫]**')
    .setDescription("**Merci d'effectuer cette commande dans 「📸」𝓜𝓔𝓓𝓘𝓐𝓢**")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setFooter('.',client.user.displayAvatarURL());
    
    if(message.channel.name != "「📸」medias")return message.delete(), message.reply(embed).then(message => message.delete(50000));
let reddit = [
"https://images7.memedroid.com/images/UPLOADED170/5581bfd091c7e.jpeg",
"https://media.discordapp.net/attachments/696310227984842824/700262466193719346/image0.jpg?width=691&height=667",
"https://media.discordapp.net/attachments/696310227984842824/700263852985548830/image0.jpg?width=521&height=667",
"https://cdn.discordapp.com/attachments/697043751775895563/700036871732068362/1195766449-offset-21442.mp4",
"https://media.discordapp.net/attachments/696310227984842824/700378881483341944/Screenshot_20200115-185924_Instagram.jpg?width=621&height=667",
"https://cdn.discordapp.com/attachments/696310227984842824/700065844754907146/girl.mp4",
"https://media.discordapp.net/attachments/696310227984842824/699935998913675325/image0-16-1.jpg?width=714&height=667",
"https://cdn.discordapp.com/attachments/696310227984842824/699885155556261898/video0.mp4",
"https://media.discordapp.net/attachments/696310227984842824/699777527484252190/20200404_065752.jpg?width=521&height=667",
"https://media.discordapp.net/attachments/696310227984842824/699880280995004506/image0.jpg?width=445&height=667",
"https://cdn.discordapp.com/attachments/634839486865342494/696819869060169748/PSk0bgA4DHAmlkuk.mp4",
"https://images-ext-1.discordapp.net/external/3KQ_kczcqTaja2VstB8VPUWfLFP84xGfGRD1SZNJiH0/https/i.imgur.com/Vjx4Aux.mp4",
"https://cdn.discordapp.com/attachments/591924799287328779/700072876191121508/video0.mov",
"https://media.discordapp.net/attachments/696310227774996498/700010817147633794/EUx9v04VAAEQDX0.png?width=666&height=667",
"https://cdn.discordapp.com/attachments/696310227774996498/699928729073221702/IMG_1375.MP4",
"https://media.discordapp.net/attachments/696505560606179388/700379682838675506/20200315_233013.jpg?width=656&height=667",
"https://images7.memedroid.com/images/UPLOADED844/5ddc40e265163.jpeg",
"https://images7.memedroid.com/images/UPLOADED228/5d73d9c97c02f.jpeg",
"http://www.memecenter.fr/files/2012/09/lazy-college-senior-le-temps-est-mauvais-je-ne-peux-pas-aller-en-cours-le-temps-est-beau-je-ne-vais-pas-le-gaspiller-en-cours.jpg",
"https://images3.memedroid.com/images/UPLOADED54/5e98337159a5f.jpeg",
"https://images7.memedroid.com/images/UPLOADED238/591a1bb996373.jpeg",
"https://images7.memedroid.com/images/UPLOADED604/591a048f86be1.jpeg",
"https://images3.memedroid.com/images/UPLOADED140/591a12ea18dc9.jpeg",
"https://fr.memedroid.com/memes/detail/2077053",
"https://media.discordapp.net/attachments/696473457470210158/720276438145564693/20200610_160059.jpg?width=504&height=672",
"https://images7.memedroid.com/images/UPLOADED423/591a04136d03c.jpeg",
"https://images3.memedroid.com/images/UPLOADED184/591a082c51294.jpeg",
"https://images3.memedroid.com/images/UPLOADED571/591a081b49b08.jpeg",
"https://media.discordapp.net/attachments/696473457470210158/720616701586178048/IMG_20190924_190959_150.jpg?width=559&height=671",
"https://images3.memedroid.com/images/UPLOADED183/591a0814a83c4.jpeg",
"https://images7.memedroid.com/images/UPLOADED797/591a080276468.jpeg",
"https://images3.memedroid.com/images/UPLOADED733/5cd7369b6624c.jpeg",
"https://images7.memedroid.com/images/UPLOADED683/5cd736905f096.jpeg",
"https://images7.memedroid.com/images/UPLOADED680/5cd71b8f5b332.jpeg",
"https://images3.memedroid.com/images/UPLOADED85/5cd6eab5d8dbf.jpeg",
"https://images3.memedroid.com/images/UPLOADED426/5cd6b2f31e73b.jpeg",
"https://images7.memedroid.com/images/UPLOADED731/5cd6af87a6027.jpeg",
"https://images7.memedroid.com/images/UPLOADED179/5581d7bd44a05.jpeg",
"https://images7.memedroid.com/images/UPLOADED162/5581d6607518e.jpeg",
"https://images7.memedroid.com/images/UPLOADED191/5581cd44292ad.jpeg",
"https://images7.memedroid.com/images/UPLOADED181/5581c8ee7ceb0.jpeg",
"https://images7.memedroid.com/images/UPLOADED120/5581bad3d911b.jpeg",
"https://media.discordapp.net/attachments/705155214554169454/720010099543769178/ok5bk23rhtl41.png",
"https://media.discordapp.net/attachments/705155214554169454/720009687243817021/IMG_20200608_220139_944.png",
"https://media.discordapp.net/attachments/696505560606179388/719817277054386186/unknown-6.png?width=670&height=671",
"https://media.discordapp.net/attachments/696505560606179388/719817444952375316/unknown-3.png?width=498&height=671",
"https://media.discordapp.net/attachments/696505560606179388/719819739299577946/IMG_20190426_223650.jpg",
"https://media.discordapp.net/attachments/696505560606179388/719819651034644480/IMG_20191229_122333.jpg",
"https://media.discordapp.net/attachments/705155214554169454/720006420615004300/82a854a91a143d240e51c0f5760672a7.png?width=671&height=671",
"https://media.discordapp.net/attachments/705155214554169454/720006401333919976/IMG_20200520_102354_986.jpg",
"https://images3.memedroid.com/images/UPLOADED171/56603fdfb6e5b.jpeg",
"https://images7.memedroid.com/images/UPLOADED937/5fc9730f3380e.jpeg",
"https://images7.memedroid.com/images/UPLOADED686/5fa9b985ca953.jpeg",
"https://images7.memedroid.com/images/UPLOADED346/5fbed5748214c.jpeg",
"https://images7.memedroid.com/images/UPLOADED396/5fbb7e6ed4d91.jpeg",
"https://images3.memedroid.com/images/UPLOADED31/5f70dedad4269.jpeg",
"https://images3.memedroid.com/images/UPLOADED359/5fa6558d1f565.jpeg",
"https://images3.memedroid.com/images/UPLOADED944/5fc76ab44822e.jpeg",
"https://images3.memedroid.com/images/UPLOADED16/5f4eaa3936723.jpeg",
"https://images7.memedroid.com/images/UPLOADED605/5d6fb1ab92d97.jpeg",
"https://images7.memedroid.com/images/UPLOADED893/5efb695c698d4.jpeg",
"https://images7.memedroid.com/images/UPLOADED753/5fd5c3771a83c.jpeg",
"https://images7.memedroid.com/images/UPLOADED648/5fd52118e6db1.jpeg",
"https://images7.memedroid.com/images/UPLOADED290/5fcca815399c3.jpeg",
"https://images7.memedroid.com/images/UPLOADED930/5e163910dc8da.jpeg",
"https://images3.memedroid.com/images/UPLOADED404/5f553fa0e4411.jpeg",
"https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/135017267_877959809639615_8863512028822385421_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=YNWh7tU1biEAX_v7OkV&tp=1&oh=40660d43339f2bca29aecdb253ba93aa&oe=601C0314&ig_cache_key=MjQ3ODYyMjYxMTM4MTM0MDA4MA%3D%3D.2",
"https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/p480x480/135394164_4744001819008348_7603182663536255506_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fZwtAptioa0AX9AeBLR&tp=1&oh=84f02afd818ef4b4eb71f9050c474ebb&oe=601B9F03&ig_cache_key=MjQ3ODUyOTUxMDkyNzAzMDYwMg%3D%3D.2",
"https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/135023026_414764606506496_9090362944901243931_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=207Zs4h80ewAX9pJR4a&tp=1&oh=b7652abd5f471d76c576097ef5c7bbbe&oe=6019C89A&ig_cache_key=MjQ3ODUyODcwOTAwMTI3NzU0OQ%3D%3D.2",
"https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/134983337_186882126496674_4295570445725624640_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=L-WqzuupCuoAX8aOiM0&tp=1&oh=e8597e062dd8e271fba5aad9e19d595b&oe=601AC67E&ig_cache_key=MjQ3ODUzMDI2NDA3MzAwODMxOA%3D%3D.2",
"https://media.discordapp.net/attachments/705155214554169454/720005563827617792/Snapchat-550776908.jpg",
"https://images7.memedroid.com/images/UPLOADED137/5581baa3c05d7.jpeg"];


let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

const meme1 = new Discord.MessageEmbed()
.setImage(subreddit)
.setTimestamp()
.setColor("WHITE")
.setFooter(".", client.user.displayAvatarURL());

message.reply(meme1)
console.log(`meme ${subreddit}`)
};

module.exports = {
    name: 'meme',
    prefix: true,
    run: meme,
}

