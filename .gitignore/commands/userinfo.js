const Discord = require("discord.js");
exports.run = (bot, msg, prefix = []) => {
let member = msg.mentions.users.first();
  const embed = new Discord.RichEmbed();
   
  embed.setColor(3447003)
  .setTitle(`Information sur ${member.username}`)
  .setThumbnail(`${member.avatarURL}`)
  .addField(`▶️ Id`, `${member.id}`, true)
  .addField(`▶️ Tag`, `${member.discriminator}`, true)
  .addField(`▶️ Bot ?`, member.bot, true)
  .addField('▶️ Joue à',  member.presence.game != null ? member.presence.game.name : "Rien", true)
  .addField('▶️ Online/Offline', `${member.presence.status}`, true)
  msg.channel.sendEmbed(embed);
};

module.exports.help = {
    name: "userinfo"
}