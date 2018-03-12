const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {
        let iconm = message.author.avatarURL;
        let helpembed = new Discord.RichEmbed()
        .setDescription("Menu Joueur/Membre")
        .setColor("#ffffff")
        .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        .addField(" ▶️ help : avoir les commandes", "&help")
        .addField(" ▶️ serveurinfo : avoir les info du serveur", "&serveurinfo")
        .addField(" ▶️ info du bot : Voir les information du bot", "&botinfo")
        .addField(" ▶️ report : report un utilisateur", "&report @? [raison]");
        let helpembed2 = new Discord.RichEmbed()
        .setAuthor(`📍 Un message contenant les commandes du bot vous a été envoyé !`, iconm)
        .setColor("#8904B1");

        try{
            await message.author.send(helpembed);
            message.delete().catch(O_o=>{});
            message.channel.sendMessage(helpembed2).then(msg => msg.delete(5000));
        }catch(e){
            message.reply("Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.").then(msg => msg.delete(5000));
        }

        if(message.member.hasPermission("MANAGE_MESSAGES")){
        let modembed = new Discord.RichEmbed()
        .setDescription("Menu Modérateur")
        .setColor("#009900")
        .addField("📕 Modération Commandes", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        .addField(" - kick : expulsé un utlisateur du serveur", "&kick @? [raison]")
        .addField(" - warn : mettre un avertissement a un utilisateur", "&warn @? [raison]")
        .addField(" - warninfo : combien d'avertissement", "&warnlevel @?")
        .addField(" - ban : bannir un utilisateur du serveur", "&ban @? [raison]")
        .addField(" - clear : netoyé le channel", "&clear [nombre de msg]")
        .addField(" - tempmute : mute un utilisateur", "&tempmute @? [1s/m/h/d");

        try{
            await message.author.send(modembed);
        }catch(e){
            message.reply("❗ Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.").then(msg => msg.delete(5000));
        }
    }}



    module.exports.help = {
        name: "helps"
    }