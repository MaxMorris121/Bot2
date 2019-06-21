// This will check if the node version you are running is the required
// Node version, if it isn't it will throw the following error to inform
// you.
if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

// Load up the discord.js library
const Discord = require("discord.js");
// We also load the rest of the things we need in this file:
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const klaw = require("klaw");
const path = require("path");
const Luis = require('luis-sdk-async');

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`,
// or `bot.something`, this is what we're refering to. Your client.
const client = new Discord.Client();

const luis = new Luis("1241f3f8-9ada-46e3-8fe8-661ca064e54b", "022fd9ad47fc4c7e99f1d5649baa6b4f");

// client is an instance of Discord.Client

 /* client.on("message", async msg => {

    if (msg.channel.type === "dm") {
      return msg.channel.send("I cant do this in dms silly!")
    }
    try {
  
      let message = msg.content
  
      if (message.length <= 0) return;
      if (message.length > 500) msg = msg.substr(0, 500);
  
      await luis.send(message)
  
      let intent = luis.intent();
  
  
  
      if (luis.response.topScoringIntent.score < 0.9) return;
  
  
      if (intent === "Ticket.Create") {
        console.log("ticket create")
        msg.channel.send("Sorry Mate but this does not work right now!")
      }
  
    }
    finally { }
  }) */

 const palyable = "paper"


// async function handleLuisCommands(intent: string, score: number)

/*client.on("message", (message) => {
  if(message.content == "I need help"){
    const categoryId = "584529253106974745";
    const questionEmbed = new Discord.RichEmbed()
    .setTitle("Do you need help?")
    .setColor("#ffdd05")
    .setDescription("You said I need help? Do you?")
    .setFooter("If you want to create a ticket, react with ✅ or react with ❌ if you don't ")
  message.channel.send(questionEmbed).then( sentEmbed =>{
     sentEmbed.react('✅')
     sentEmbed.react('❌')
  
  const collector = sentEmbed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
  collector.on('collect', async (reaction) => {
    if(reaction.emoji.name === '❌'){
      sentEmbed.delete()
    }

    if(reaction.emoji.name === '✅'){
      const myembed = new Discord.RichEmbed()
      .setAuthor('Bot')
      .addField('1,', 'Roblox scripting')
      .addField('2,', 'Roblox building')
      .addField('3,', 'Javascript')
      .addField('4,', 'Python')
      .setColor(`#ffc600`)
      message.channel.send(myembed).then( async message =>{
      

        await message.react('1⃣') 
        await message.react('2⃣') 
        await message.react('3⃣') 
        await message.react('4⃣') 
        const collector = message.createReactionCollector((reaction, user) => ((reaction.emoji.name === '1⃣' || reaction.emoji.name === '2⃣' || reaction.emoji.name === '3⃣' || reaction.emoji.name === '4⃣') && user.id === message.author.id));
        collector.on('collect', async (reaction) => {
          if(reaction.emoji.name === '1⃣'){
            sentEmbed.delete()
            message.delete()
                
    const categoryId = "589896042732978197";
    

    
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
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Happy to help"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send('<@&589894319616557072>')
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
          }
          if(reaction.emoji.name === '2⃣'){
            sentEmbed.delete()
            message.delete()
                
    const categoryId = "589896042732978197";
    

    
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
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Happy to help"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send('<@&589894319616557072>')
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
          }
          if(reaction.emoji.name === '2⃣'){
            sentEmbed.delete()
            message.delete()
                
    const categoryId = "589896042732978197";
    

    
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
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Happy to help"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send('<@&589894319616557072>')
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
          }
          if(reaction.emoji.name === '3⃣'){
            sentEmbed.delete()
            message.delete()
                
    const categoryId = "589896042732978197";
    

    
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
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Happy to help"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send('<@&589894319616557072>')
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
          }
          if(reaction.emoji.name === '4⃣'){
            sentEmbed.delete()
            message.delete()
                
    const categoryId = "589896042732978197";
    

    
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
            
            settedParent.overwritePermissions(message.guild.roles.find('name', "Happy to help"), { "READ_MESSAGES": true });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new Discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription(`Hello, my name is Corncopia Bot and I'll be putting you on hold until further notice please be patient for assistance. Also, thank you for choosing ${message.guild.name}!`);
 
            settedParent.send(embedParent);
            settedParent.send('<@&589894319616557072>')
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
 
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
          }
        })
      })
    }

  })
})
  }
}) */
client.on("message", async (message) => {
    if(message.content === "fuck"){
        
  const settings = client.getSettings(message.guild);
  const modlog = client.channels.find('name', 'mod-log');
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;
  const msg = `${settings.prefix}reason The user said ${message}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`)
  .setColor('RANDOM')
  .setTimestamp()
  .addBlankField()
  .addField(`What happened:`, `You said in ${message.guild.name},`)
  .addField(`What you said:`, `${message}`)
  .addField(`This message was:`, `Deleted by ${client.user.username} in ${message.guild.name}`)
  .setFooter(`This was a Automod action by ${client.user.username} in ${message.guild.name}`)
  const warnembed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Automod Warning\n**Target:** ${message.author}\n**Reason:** ${reason}`)
  .addField(`Do you want to mute ${message.author}? If yes please click the check mark if no then click the x!`)
  .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);
  await message.author.send(embed).then(message.delete())
  await client.channels.get(modlog.id).send(warnembed).then( warnembed =>{
    warnembed.react('✅')
    warnembed.react('❌')

 const collector = warnembed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
 collector.on('collect', async (reaction) => {
   if(reaction.emoji.name === '❌'){
    warnembed.delete()
    if(message.channel.type === 'dm'){
        message.channel.send('Well thank you!')
    }
    if(message.channel){
        message.channel.send('Thank you!')
    }
   }

   if(reaction.emoji.name === '✅'){
    const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
   }
})
  })    
    }
})

client.on("message", async (message) => {
    if(message.content === "Fuck"){
        
  const settings = client.getSettings(message.guild);
  const modlog = client.channels.find('name', 'mod-log');
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;
  const msg = `${settings.prefix}reason The user said ${message}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`)
  .setColor('RANDOM')
  .setTimestamp()
  .addBlankField()
  .addField(`What happened:`, `You said in ${message.guild.name},`)
  .addField(`What you said:`, `${message}`)
  .addField(`This message was:`, `Deleted by ${client.user.username} in ${message.guild.name}`)
  .setFooter(`This was a Automod action by ${client.user.username} in ${message.guild.name}`)
  const warnembed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Automod Warning\n**Target:** ${message.author}\n**Reason:** ${reason}`)
  .addField(`Do you want to mute ${message.author}? If yes please click the check mark if no then click the x!`)
  .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);
  await message.author.send(embed).then(message.delete())
  await client.channels.get(modlog.id).send(warnembed).then( warnembed =>{
    warnembed.react('✅')
    warnembed.react('❌')
 
 const collector = warnembed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
 collector.on('collect', async (reaction) => {
   if(reaction.emoji.name === '❌'){
    warnembed.delete()
    if(message.channel.type === 'dm'){
        message.channel.send('Well thank you!')
    }
    if(message.channel){
        message.channel.send('Thank you!')
    }
   }

   if(reaction.emoji.name === '✅'){
    const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
   }
})
  })    
   }
})

client.on("message", async (message) => {
    if(message.content === "Asshole"){
         
  const settings = client.getSettings(message.guild);
  const modlog = client.channels.find('name', 'mod-log');
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;
  const msg = `${settings.prefix}reason The user said ${message}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`)
  .setColor('RANDOM')
  .setTimestamp()
  .addBlankField()
  .addField(`What happened:`, `You said in ${message.guild.name},`)
  .addField(`What you said:`, `${message}`)
  .addField(`This message was:`, `Deleted by ${client.user.username} in ${message.guild.name}`)
  .setFooter(`This was a Automod action by ${client.user.username} in ${message.guild.name}`)
  const warnembed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Automod Warning\n**Target:** ${message.author}\n**Reason:** ${reason}`)
  .addField(`Do you want to mute ${message.author}? If yes please click the check mark if no then click the x!`)
  .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);
  await message.author.send(embed).then(message.delete())
  await client.channels.get(modlog.id).send(warnembed).then( warnembed =>{
    warnembed.react('✅')
    warnembed.react('❌')
 
 const collector = warnembed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
 collector.on('collect', async (reaction) => {
   if(reaction.emoji.name === '❌'){
    warnembed.delete()
    if(message.channel.type === 'dm'){
        message.channel.send('Well thank you!')
    }
    if(message.channel){
        message.channel.send('Thank you!')
    }
   }

   if(reaction.emoji.name === '✅'){
    const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
   }
})
  })    
}
})

client.on("message", async (message) => {
    if(message.content === "asshole"){
          
  const settings = client.getSettings(message.guild);
  const modlog = client.channels.find('name', 'mod-log');
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;
  const msg = `${settings.prefix}reason The user said ${message}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`)
  .setColor('RANDOM')
  .setTimestamp()
  .addBlankField()
  .addField(`What happened:`, `You said in ${message.guild.name},`)
  .addField(`What you said:`, `${message}`)
  .addField(`This message was:`, `Deleted by ${client.user.username} in ${message.guild.name}`)
  .setFooter(`This was a Automod action by ${client.user.username} in ${message.guild.name}`)
  const warnembed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Automod Warning\n**Target:** ${message.author}\n**Reason:** ${reason}`)
  .addField(`Do you want to mute ${message.author}? If yes please click the check mark if no then click the x!`)
  .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);
  await message.author.send(embed).then(message.delete())
  await client.channels.get(modlog.id).send(warnembed).then( warnembed =>{
    warnembed.react('✅')
    warnembed.react('❌')
 
 const collector = warnembed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
 collector.on('collect', async (reaction) => {
   if(reaction.emoji.name === '❌'){
    warnembed.delete()
    if(message.channel.type === 'dm'){
        message.channel.send('Well thank you!')
    }
    if(message.channel){
        message.channel.send('Thank you!')
    }
   }

   if(reaction.emoji.name === '✅'){
    const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
   }
})
  })    
    }
})

client.on("message", async (message) => {
  if(message.content == "server info?"){ // Check if content of message is "!ping"  
  
  const settings = client.getSettings(message.guild);
  const modlog = client.channels.find('name', 'mod-log');
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;
  const msg = `${settings.prefix}reason The user said ${message}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`)
  .setColor('RANDOM')
  .setTimestamp()
  .addBlankField()
  .addField(`What happened:`, `You said in ${message.guild.name},`)
  .addField(`What you said:`, `${message}`)
  .addField(`This message was:`, `Deleted by ${client.user.username} in ${message.guild.name}`)
  .setFooter(`This was a Automod action by ${client.user.username} in ${message.guild.name}`)
  const warnembed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Automod Warning\n**Target:** ${message.author}\n**Reason:** ${reason}`)
  .addField(`Do you want to mute ${message.author}? If yes please click the check mark if no then click the x!`)
  .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);
  await message.author.send(embed).then(message.delete())
  await client.channels.get(modlog.id).send(warnembed).then( warnembed =>{
    warnembed.react('✅')
    warnembed.react('❌')
 
 const collector = warnembed.createReactionCollector((reaction, user) => ((reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id));
 collector.on('collect', async (reaction) => {
   if(reaction.emoji.name === '❌'){
    warnembed.delete()
    if(message.channel.type === 'dm'){
        message.channel.send('Well thank you!')
    }
    if(message.channel){
        message.channel.send('Thank you!')
    }
   }

   if(reaction.emoji.name === '✅'){
    const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  const reason = `Awaiting moderator's input. Use the command reason <reason>.`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Please have a moderator do ${settings.prefix}reason <reason>`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(message.author).roles.has(muteRole.id)) {
    message.guild.member(message.author).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }
   }
})
  })     
    }
  });

  



// Here we load the config file that contains our token and our prefix values.
client.config = require("./config.js");
// client.config.token contains the bot's token
// client.config.prefix contains the message prefix

// Let's start by getting some useful functions that we'll use throughout
// the bot, like logs and elevation features.
require("./util/functions")(client);

// Aliases and commands are put in collections where they can be read from,
// catalogued, listed, etc.
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Now we integrate the use of Evie's awesome Enhanced Map module, which
// essentially saves a collection to disk. This is great for per-server configs,
// and makes things extremely easy for this purpose.
client.settings = new Enmap({ 
  name: "settings",
  autoFetch: true,
  fetchAll: false,
  cloneLevel: 'deep',
  ensureProps: true
});
client.code = new Enmap({
name: "codes"
});
client.premiumusers = new Enmap({
name: "premusers"
});
client.redcodes = new Enmap({
name: "redeemcodes"
});

// Basically just an async shortcut to using a setTimeout. Nothing fancy!
client.wait = promisify(setTimeout);

// We're doing real fancy node 8 async/await stuff here, and to do that
// we need to wrap stuff in an anonymous function. It's annoying but it works.

const init = async () => {

  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const cmdFiles = await readdir("./commands/");
  client.log("log", `Loading a total of ${cmdFiles.length} commands.`);
  klaw("./commands").on("data", (item) => {
    const cmdFile = path.parse(item.path);
    if (!cmdFile.ext || cmdFile.ext !== ".js") return;
    const response = client.loadCommand(`${cmdFile.name}${cmdFile.ext}`);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.log("log", `Loading a ${evtFiles.length} events.`);
  klaw("./events").on("data", (item) => {
    const evtFile = path.parse(item.path);
    if (!evtFile.ext || evtFile.ext !== ".js") return;
    const event = require(`./events/${evtFile.name}${evtFile.ext}`);
    client.on(evtFile.name, event.bind(null, client));
  });

  // Generate a cache of client permissions for pretty perms
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  // Here we login the client.
  client.login(client.config.token);

// End top-level async/await function.
};

init();