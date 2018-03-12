const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Serveur Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", '`'+ message.guild.name +'`', true)
    .addField("Créé le", '`'+ message.guild.createdAt +'`', true)
    .addField("Vous avez rejoint", '`'+ message.member.joinedAt +'`', true)
    .addField("Total des membres", '`'+ message.guild.memberCount +'`', true);

    try{
      await message.author.send(serverembed);
      message.delete().catch(O_o=>{});
  }catch(e){
      message.reply("❓ Vos SM sont verrouillés. Je ne peux pas vous envoyer les commandes de la foule.");
  }
}

module.exports.help = {
  name:"serveurinfo"
}
