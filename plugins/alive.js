const{getvar} = require('../lib')
module.exports = {
	name: "alive",
	category: "info",
	desc: "Is bot alive",
    query:'I am Alive Broo',
	async mbb({ msg,conn },{q}) {
conn.sendMessage(msg.from,{text: I AM ALIVE})      
	}
}
