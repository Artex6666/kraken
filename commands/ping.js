function pingFunction(client, msg)  
{
  var ms = msg.createdTimestamp - Date.now();
    msg.channel.send('***Latence:*** `' +`${ms.toString().replace("-", "")}` + 'ms`')
}
module.exports = 
{
  name: 'ping',
  prefix: true,
  run: pingFunction,
}