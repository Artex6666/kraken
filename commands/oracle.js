function oracle(client, message) {
let args =  message.content.split(" ").splice(1).join(' ')
var eightball = [
  "oui!",
  "non...",
  "peut etre?",
  "probablement",
  "pas aujourd'hui en tout cas",
  "je ne pense pas.",
  "jamais!",
  "t'es juste un fdp demande pas'",
]
if (args[1] != null)message.reply(eightball[Math.floor(Math.random() * eightball.length)]); 
else message.reply("> **Quelle est ta question? :rolling_eyes: (essaye plutot: <oracle [question])**");
}
module.exports = {
    name: 'oracle',
    run: oracle,
    prefix:true,
};
