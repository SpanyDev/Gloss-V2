 
 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
   name: 'tepki-rol',// bu arada üsteki mesaj clone olmuş siktir edin qwe.qw silv ghvjbjhnkjmeklşn
   run: async(client, message, args) => {//Ç:D
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  let kanal = message.mentions.channels.first();
   let role = message.mentions.roles.first()
  if(args[0] == "embed"){
 
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?tepki-rol :emojiniz: @rol #kanal mesajınız || Sadece Discordun Kendi Emojileri Desteklenmektedir**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[1] || !role || !kanal || !args[4]) return message.channel.send(spany)
    
   const embed = new MessageEmbed()  
    .setColor("#3f007f")
    .setDescription(args[4])
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   return kanal.send(embed).then(async msg => {
     
    await msg.react(args[1])
     db.push(`react_${message.guild.id}`, {kanal: kanal.id, mesaj: msg.id, role: role.id, emoji: args[1]})
    const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | ${kanal} Kanalında Embedli Tepki Rol Olacak :yum:**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`) 
    return message.channel.send(spany) 
   })
  }   
  if(args[0] == "normal"){
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?tepki-rol :emojiniz: @rol #kanal mesajınız || Sadece Discordun Kendi Emojileri Desteklenmektedir**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[1] || !role || !kanal || !args[4]) return message.channel.send(spany)
    

     
    await kanal.messages.fetch(args[4]).then((msg) => {
     msg.react(args[1])
     db.push(`react_${message.guild.id}`, {kanal: kanal.id, mesaj: args[4], role: role.id, emoji: args[1]})
    const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | ${kanal} Kanalında Normal Tepki Rol Olacak**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(spany) 
   })
  }   
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?tepki-rol embed/normal**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[0]) return message.channel.send(spany)
     
   }
}
