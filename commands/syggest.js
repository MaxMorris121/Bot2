const Discord = require('discord.js')
        
exports.run = async (client, message, args) => {
    const sugchn = message.guild.channels.get('584040767086133259')
        const mainchn = client.channels.get('584040880696983553')
            let msg = message.content.split(' ').slice(1).join(' ')
            if (message.channel !== sugchn) {
                message.reply(`Please write suggestions in <#584040767086133259> only!`)
            } else
                if (!msg) {
                    message.reply(`Please define the description of the suggestion!`)
                } else {
                    let embed = new Discord.RichEmbed()
                        .setColor('#FF0000')
                        .setAuthor(message.member.displayName, message.author.avatarURL)
                        .setTitle(`Thank you!`)
                        .setDescription(`Thank you for leaving a suggestion! We'll get back to you in no time!`)
                    let suggest = new Discord.RichEmbed()
                        .setColor('#FF0000')
                        .setAuthor(message.member.displayName)
                        .setTitle(`${message.member.displayName}'s suggestion`)
                        .setDescription(msg)
                        .setFooter(`Thank you for your suggestion!`)
                    if (sugchn) {
                        sugchn.send(embed).then(react => {
                            message.react('👍').then(react => {
                                message.react('😊')
                            })
                        })
                        mainchn.send(suggest).then(msg => {
                            msg.react('🖐').then(msg => {
                                msg.react('👎')
                            })
                        })
                    }
                }
}  

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "suggest",
    category: "System",
    description: "Suggest something.",
    usage: "suggest"
  };
  