const { randomID } = require("ramfish-api"); //require the package
 
let id = randomID({ 
    length: 25, //Input any number as the length of the ID
    type: "random",
    input: "I hate u" //There is 4 types to choose from, check them out down bellow
})
console.log(id) //Will output a random ID with 25 characters

const credGen = require('credential-generator');
    
const credentials = credGen.generate(15); // Generates a 15 character username and password.
    
console.log(`${credentials.username} || ${credentials.password}`) ;
    
// output : xdcYhPKHQzsYTi1 || xZX0LiY95JuIFCn

const discord = require("discord.js");
 
module.exports.run = async (client, message, args, member) => {
    const embed = new discord.RichEmbed()
    .setAuthor("Genrate creds")
    .addBlankField()
    .addField("Name", `${credentials.username}`)
    .addField(`Password`, `${credentials.password}`)
    .addField("Id", `${id}`)
    .setFooter(`${credentials.username}, ${credentials.password}, ${id}`)
    .setTimestamp()
message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ineedhelp", "ticket"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "cred",
    category: "Creditanls",
    description: "Want a random id, name, and password.",
    usage: "cred"
  };
  