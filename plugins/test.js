const { MENU } = require('../config')
const{tiny}=require('../lib')

module.exports = {
  name: "give",
  category: "ignore",
  async mbb ({ msg, conn}) {
  var buttons = [{
    urlButton: {
        displayText: 'GITHUB',
        url: 'https://github.com/Jackz-ser'
    }
}, {
  urlButton: {
    displayText: 'OWNER',
    url: 'https://wa.me/'+MENU.split(";")[2]+'?text=*Hey+'+MENU.split(";")[1]+'*'
    }
}, {
    quickReplyButton: {
        displayText: 'All commands',
        id: 'commands'
    }  
}, {
    quickReplyButton: {
        displayText: 'Support group',
        id: 'support'
    }
}]
var menu = `╭═══〘 ${MENU.split(";")[0]} 〙═══⊷❍
┃❉╭──────────────
┃❉│
┃❉│ Owner : ${MENU.split(";")[1]}
┃❉│ User : ${msg.pushName}
┃❉│ Mode : PUBLIC
┃❉│ Server : ANJALI MD
┃❉│ Total RAM : 500mb
┃❉│ Available RAM: 400mb
┃❉│ Disk Space: 620 GB
┃❉│ Version: 1555
┃❉│
┃❉│
┃❉│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃❉│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃❉│   ${BOT_INFO.split(";")[0]}
┃❉│ 
┃❉╰───────────────
╰═════════════════⊷`
return await conn.sendMessage(
                                       msg.from,
                                        {
                                          video: { url: config.thumbvideo },
                                          caption: tiny(menu),buttons,
                                          gifPlayback: true,

                                        },
                                         { quoted: msg ,adReply:true }
			
			);
})

module.exports = {
  on: 'button',
 async mbb {(msg, conn)} {
var {button} = message
if (button) {
  if (button.startsWith("commands")) return await msg.reply("Commands")
  if (button.startsWith("ping")) return await msg.reply(".ping")
  if (button.startsWith("support")) return await msg.reply(MENU.split(";")[3])
} 
}
