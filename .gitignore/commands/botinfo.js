const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    let memberCount = bot.users.size;
    let servercount = bot.guilds.size;
    let statsmsg = new Discord.RichEmbed()
    .setAuthor("Stats - AdminBot", bicon)
    .setDescription(`Voici les statistiques à propos du bot .Le bot est divisé en plusieurs morceaux afin qu'il soit plus optimisé et qu'il soit plus agréable à l'utilisation. Vous ne verrez donc plus les stats dans sa globalité.`)
    .setThumbnail(bicon)
    .addField("Support¬", '[Rejoindre](https://discord.gg/yBmzHbf)', true)
    .addField("Créateur¬", '`'+ draincorp + '`', true)
    .addField("Serveur¬", '`'+ servercount + '`',true)
    .addField("Version¬", '`'+ version + '`', true)
    .addField("utilisteur sur le seveur¬", '`'+ message.guild.memberCount + '`')
    .setColor("#bc0000")
    .setFooter(`Demandé par ${message.author.tag}`, bicon)

    message.channel.sendMessage(statsmsg);

    message.delete().catch(O_o=>{});
    message.reply("Regarde dans t'es message privé :wink: :ok_hand:")
    try{
      await message.author.send(botembed);
  }catch(e){
  }
}

module.exports.help = {
  name:"azertyuiopmlkllkmkjk"
}
