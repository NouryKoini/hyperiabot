const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("h!");
  

bot.login(process.env.TOKEN)
console.log("Ready to Start Utulisation")

bot.on('ready', function (){
    bot.user.setPresence({ game: { name: "| h!help | HyperiaNetwork |"}})
})

bot.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "bienvenue-aurevoir").send(`__Bonjour !__ ${member} \n \n**Bienvenue sur HyperiaNetwork** ! \n \n*Besoins d'aide ? =>* \nMentione le **Staff** `)
  console.log("Quelqu'un a rejoint le Discord")
})

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "bienvenue-aurevoir").send(`Aurevoir ! ${member}`)
  console.log("Quelqu'un a quitté le Discord")
})

bot.on('message', message => {
    
    if (message.content === (prefix + "help")){
        var help_embed = new Discord.RichEmbed()
           .setColor('#821991')
            .addField("__Developement__", ":warning: *Bot en Dévelopement* :warning: \n")
            .addField("__Staff__", "`sh!kick [SOON]` => Expulser un joueur du serveur Discord \n`sh!ban [SOON]` => Bannir un joueur du serveur Discord")
            .addField("__Joueur__", "`h!ip` => Savoir l'ip pour acceder au serveur")
        .setFooter("Developed by Steellgold")        
           message.channel.send(help_embed)
           console.log("ed!help")
    }
  
  if (message.content === (prefix + "ip")){
        var help_embed = new Discord.RichEmbed()
           .setColor('#821991')
            .addField("__Oups__", "*Desolé je n'est pas le doit de donner l'ip*\n")
            .setFooter("Developed by Steellgold")        
           message.channel.send(help_embed)
           console.log("ed!help")
    }
         
})
