const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
version = "0.1 🎉";
draincorp = "TarKyo 👔";
prefix = botconfig.prefix;

// 💻Développeur, ✏ Graphiste, 🔧Modélisateur, 🏢Builder, 🎮 Membre

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.username + 'à rejoins le serveur ')
  var role = member.guild.roles.find('name', '🎮 Membre');
  member.addRole(role)
})

bot.on('message', message => {
  if (message.content === '!graphiste') {
    var RoleToAdd = message.guild.roles.find('name', '✏ Graphiste');
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Graphiste** `)
    .setColor("#009900");
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.member.addRole(RoleToAdd);
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
  }
});

bot.on('message', message => {
  if (message.content === '!modélisateur') {
    var RoleToAdd = message.guild.roles.find('name', '🔧Modélisateur');
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Modélisateur** `)
    .setColor("#009900");
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.member.addRole(RoleToAdd);
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
  }
});

bot.on('message', message => {
  if (message.content === '!développeur') {
    var RoleToAdd = message.guild.roles.find('name', '💻Développeur');
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Développeur** `)
    .setColor("#009900");
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.member.addRole(RoleToAdd);
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
  }
});

bot.on('message', message => {
  if (message.content === '!builder') {
    var RoleToAdd = message.guild.roles.find('name', '🏢Builder');
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Builder** `)
    .setColor("#009900");
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.member.addRole(RoleToAdd);
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
  }
});

// 💻Développeur, ✏ Graphiste, 🔧Modélisateur, 🏢Builder, 🎮 Membre
bot.on('message', message => {
  if (message.content === '!leave') {
    var RoleToAdd = message.guild.roles.find('name', '🎮 Membre');
    let gRole = message.guild.roles.find(`name`,'✏ Graphiste');
    let mRole = message.guild.roles.find(`name`,'🔧Modélisateur');
    let bRole = message.guild.roles.find(`name`,'🏢Builder');
    let dRole = message.guild.roles.find(`name`,'💻Développeur');
    var role = new Discord.RichEmbed()
    .setDescription(`:x: **${message.author.tag}** est maintenant **Membre** `)
    .setColor("#009900");
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.member.addRole(RoleToAdd);
    message.member.removeRole(gRole);
    message.member.removeRole(mRole);
    message.member.removeRole(bRole);
    message.member.removeRole(dRole);
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
  }
});


bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs!`);

});

bot.login(process.env.TOKEN);
