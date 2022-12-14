const {tiny} = require('../lib')
module.exports = {
	name: "chatbot",
	category: "Fun",
	desc: "AI Chatbot",
    isOwner:true,
    async mbb({ msg,conn},{q,prefix}) {
        await conn.sendMessage(msg.from, {
            text: tiny("CHAT BOT MODE"),
            footer: tiny("Turn on/off chatbot"),
            buttons: [
              {
                buttonId: `${prefix}setvar AI:false`,
                buttonText: { displayText: tiny("DISABLE") },
                type: 1,
              },{
                buttonId: `${prefix}setvar AI:true`,
                buttonText: { displayText: ("ENABLE") },
                type: 1,
              }
            ],
            headerType: 1,
          })
	}
};
