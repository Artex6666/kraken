/* var readline = require('readline'); 
const fs = require("fs")
var dtb = JSON.parse(fs.readFileSync("../talk.json", "utf-8"))
console.log(dtb)
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Message type: ", function(reponse) { 
  let question = dtb.find(quest => quest.question.toLowerCase() === reponse.toLowerCase())
  if(!question) return
    let rep = question.réponses
    if(rep.length >1){
      rep = question.réponses[Math.round(Math.random() * rep.length)]
    }
    console.log(rep)
  rl.close(); 
}) */
function charactersSame(str)
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
