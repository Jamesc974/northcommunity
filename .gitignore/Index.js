
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
version = "0.1 🎉";
draincorp = "TarKyo 👔";
dev = "!développeur";
graph = "!graphiste";
mod = "!modélisateur";
build = "!builder";
prefix = botconfig.prefix;

// 💻Développeur, ✏ Graphiste, 🔧Modélisateur, 🏢Builder, 🎮 Membre

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.username + 'à rejoins le serveur ')
  var role = member.guild.roles.find('name', '🎮 Membre');
  var iconb = bot.user.avatarURL;
  var memberCount = bot.users.size;
  var servercount = bot.guilds.size;
  var statsmsg = new Discord.RichEmbed()
  .setAuthor("Bienvenue", iconb)
  .setDescription(`Bienvenue à vous sur le serveur Communautaire **North Community** pour avoir un grade faite **!grade** ou rend toi dans le channel **#rejoindre-un-grade**`)
  .setThumbnail(iconb)
  .addField("Support¬", '[Rejoindre](https://discord.gg/yBmzHbf)', true)
  .addField("Créateur¬", '`'+ draincorp + '`', true)
  .setColor("#A901DB")
  member.addRole(role)
  member.createDM().then(channel => {
    channel.send(statsmsg)

  })

});

bot.on('message', message => {
  if (message.content === '!grade') {
    var role = new Discord.RichEmbed()
    var iconb = bot.user.avatarURL;
    var iconm = message.author.avatarURL
    var name = message.guild.id
    var memberCount = bot.users.size;
    var servercount = bot.guilds.size;
    var statsmsg = new Discord.RichEmbed()
    .setAuthor("Liste des grade que vous pouvez rejoindre", iconb)
    .setThumbnail(iconb)
    .addField("💻Développeur¬", '`'+ dev + '`', true)
    .addField("✏ Graphiste¬", '`'+ graph + '`',true)
    .addField("🔧Modélisateur¬", '`'+ mod + '`', true)
    .addField(`🏢Builder¬`, '`'+ build + '`', true)
    .setColor("#A901DB")
    .setFooter(`Demandé par ${message.author.tag}`, iconm)
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(statsmsg);
  }
});

bot.on('message', message => {
  if (message.content === '!graphiste') {
    var RoleToAdd = message.guild.roles.find('name', 'Graphiste');
    var memberCount = bot.users.size;
    var iconb = bot.user.avatarURL
    var iconm = message.author.avatarURL
    var servercount = bot.guilds.size;
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Graphiste** `)
    .setColor("#009900");
    var grade = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} vien de rejoindre un grade`, iconm)
    .addField("Pseudo¬", `${message.author.tag}`, true)
    .addField("Grade¬", '` ✏ Graphiste `', true)
    .setColor("#bc0000")
    .setFooter(`Développé par Tarkyo•`, iconb)

    message.delete().catch(O_o=>{});
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
    var gradem = message.guild.channels.find(`name`, "moderation");
    gradem.send(grade);
    message.member.addRole(RoleToAdd);
  }
});


bot.on('message', message => {
  if (message.content === '!modelisateur') {
    var RoleToAdd = message.guild.roles.find('name', 'Modelisateur');
    var memberCount = bot.users.size;
    var iconb = bot.user.avatarURL
    var iconm = message.author.avatarURL
    var servercount = bot.guilds.size;
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Modélisateur** `)
    .setColor("#009900");
    var grade = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} vien de rejoindre un grade`, iconm)
    .addField("Pseudo¬", `${message.author.tag}`, true)
    .addField("Grade¬", '` 🔧Modélisateur `', true)
    .setColor("#bc0000")
    .setFooter(`Développé par Tarkyo•`, iconb)

    message.delete().catch(O_o=>{});
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
    var gradem = message.guild.channels.find(`name`, "moderation");
    gradem.send(grade);
    message.member.addRole(RoleToAdd);
  }
});

bot.on('message', message => {
  if (message.content === '!developpeur') {
    var RoleToAdd = message.guild.roles.find('name', 'Developpeur');
    var memberCount = bot.users.size;
    var iconb = bot.user.avatarURL
    var iconm = message.author.avatarURL
    var servercount = bot.guilds.size;
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Développeur** `)
    .setColor("#009900");
    var grade = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} vien de rejoindre un grade`, iconm)
    .addField("Pseudo¬", `${message.author.tag}`, true)
    .addField("Grade¬", '` 💻 Développeur `', true)
    .setColor("#bc0000")
    .setFooter(`Développé par Tarkyo•`, iconb)

    message.delete().catch(O_o=>{});
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
    var gradem = message.guild.channels.find(`name`, "moderation");
    gradem.send(grade);
    message.member.addRole(RoleToAdd);
  }
});

bot.on('message', message => {
  if (message.content === '!builder') {
    var RoleToAdd = message.guild.roles.find('name', 'Builder');
    var memberCount = bot.users.size;
    var iconb = bot.user.avatarURL
    var iconm = message.author.avatarURL
    var servercount = bot.guilds.size;
    var role = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: **${message.author.tag}** vient de rejoindre le groupe de **Builder** `)
    .setColor("#009900");
    var grade = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} vien de rejoindre un grade`, iconm)
    .addField("Pseudo¬", `${message.author.tag}`, true)
    .addField("Grade¬", '` 🏢Builder `', true)
    .setColor("#bc0000")
    .setFooter(`Développé par Tarkyo•`, iconb)

    message.delete().catch(O_o=>{});
    message.channel.sendMessage(role).then(msg => msg.delete(5000));
    var gradem = message.guild.channels.find(`name`, "moderation");
    gradem.send(grade);
    message.member.addRole(RoleToAdd);
  }
});

// 💻Développeur, ✏ Graphiste, 🔧Modélisateur, 🏢Builder, 🎮 Membre
bot.on('message', message => {
  if (message.content === '!leave') {
    var RoleToAdd = message.guild.roles.find('name', '🎮 Membre');
    let gRole = message.guild.roles.find(`name`,'Graphiste');
    let mRole = message.guild.roles.find(`name`,'Modélisateur');
    let bRole = message.guild.roles.find(`name`,'Builder');
    let dRole = message.guild.roles.find(`name`,'Développeur');
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

bot.on('message', message => {
  if (message.content.startsWith(prefix + "annonce")) {
    if(message.author.id == "104935392658137088") {
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      var iconm = message.author.avatarURL
      var embed = new Discord.RichEmbed()
        .setAuthor("📋 Annonce", iconm)
        .addField("Répondre avec :ok_hand: ou :poop:", thingToEcho)
        .setColor("#DF0101")
        .setTimestamp()
        .setFooter(`Par ${message.author.tag}`)
      message.delete().catch(O_o=>{});
      message.guild.channels.find("name", "annonce").sendEmbed(embed)
      .then(function (message) {
        message.react("👍")
        message.react("👎")
      }).catch(function() {
      });
    }else{
      return message.reply("Tu n'as pas la permission.")
  }}});

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs!`)
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props)
  });
});

bot.login(process.env.TOKEN);
