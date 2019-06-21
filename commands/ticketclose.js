const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 
    const settings = message.settings;

    const categoryId = "591113107007340556";

    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Please place this command in a ticket channel.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hello")
        .setDescription(`Your ticket is marked as ** complete **. If you want to make a new one, do ${settings.prefix}new`)
        .setFooter("ticket gesloten");
 

    const modlog = bot.channels.find('name', 'mod-log');
    if (!modlog) return message.channel.send("Channel does not exist");
 
    modlog.send(embedCloseTicket);
 
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["nomorehelp", "I_am_done"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "close",
    category: "Ticket System",
    description: "Want to close a ticket.",
    usage: "close"
  };