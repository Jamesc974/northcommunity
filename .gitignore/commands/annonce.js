const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!aUser) return;
    let areason = args.join(" ").slice(22)
    let iconm = bot.user.avatarURL;

    let annonceEmbed = new Discord.RichEmbed()
    .setAuthor("📋 Annonce", iconm)
    .setColor("#A901DB")
    .addField("Nouvelle annonce", areason);

    let annonceschannel = message.guild.channels.find(`name`, "annonce");
    if(!annonceschannel) return message.channel.send("❗ Impossible de trouver le canal des rapports.");


    message.delete().catch(O_o=>{});
    annonceschannel.send(annonceEmbed);

}
 
module.exports.help = {
  name: "annonce"
}
