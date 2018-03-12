const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("❓ Tu as mis son nom ❓");
    let rreason = args.join(" ").slice(22)
    let iconm = message.author.avatarURL;

    let reportEmbed = new Discord.RichEmbed()
    .setAuthor(`Un report provenant de ${message.author.tag}`, iconm)
    .setColor("#15f153")
    .addField("Utilisateur signalé¬", `${rUser}`, true)
    .addField("Channel¬", message.channel, true)
    .addField("Raison¬", rreason);

    let reportschannel = message.guild.channels.find(`name`, "moderation");
    if(!reportschannel) return message.channel.send("❗ Impossible de trouver le canal des rapports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}