const Discord = require("discord.js");

// const categoryId = "591113107007340556"
 
module.exports.run = async (client, message, args, member) => {
    const categoryId = "591113107007340556";
    

    
    var userName = message.author.username;
    
    var userDiscriminator = message.author.discriminator;
 
    
    var bool = false;
 
    message.guild.channels.forEach((channel) => {
 
        
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("You have already created a ticket");
 
            bool = true;
 
        }
 
    });
 
    
    if (bool == true) return;
 
    var embedCreateTicket = new Discord.RichEmbed()
        .setTitle("Hello, " + message.author.username)
        .setFooter("Support channel is created");
 
    message.channel.send(embedCreateTicket);
 
    
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 
 
        createdChan.setParent(categoryId).then((settedParent) => { 
 
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Support"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, ${message.author.username} my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send("<@&591123558009274370>")
        }).catch(err => {
            message.channel.send("Something went wrong.");
            console.log(err)
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
  }
 


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ineedhelp", "ticket"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "new",
    category: "Ticket System",
    description: "Want to create a ticket.",
    usage: "new"
  };
  