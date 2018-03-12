const db = require('quick.db')

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires you to have a role with `Administrator`') // Tell them that they dont have the proper perms
    if (!args.join(" ")) return message.channel.send('Please enter arguments. `setAutoRole <roleName>`') // Tell them if they didn't supply arguments

    db.updateText(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(i => { // .trim() removes the whitespaces on both ends of the string. 

        message.channel.send('Successfully changed auto-role to: `' + i.text + '`'); // This tells them what they just set the autorole to.

    })

}

module.exports.help = {
    name: "setautorole"
}