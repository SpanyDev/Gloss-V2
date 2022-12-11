 
 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
   name: 'ototag',
   run: async(client, message, args) => {//Ç:D
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
   
  if(args[0] == "aç"){
    
   const hata = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?ototag aç tag**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[1]) return message.channel.send(hata)
     
  db.set(`ototag_${message.guild.id}`, args[1])
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Tag ${args[1]} Olarak Belirlendi**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(spany) 
  }   
  if(args[0] == "kapat"){
    db.delete(`ototag_${message.guild.id}`)
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Oto Tag Sistemi Kapatıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(spany) 
  }   
     
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?ototag aç/kapat**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[0]) return message.channel.send(spany)
     
   }
}
