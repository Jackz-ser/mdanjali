/*
const{getvar} = require('../lib')
module.exports = {
	name: "alive",
	category: "info",
	desc: "Is bot alive",
    query:'I am Alive Broo',
	async mbb({ msg,conn },{q}) {
conn.sendMessage({text: "I AM ALIVE"})      
	}
}
*/

const { sendAlive } = require('../lib')
module.exports = {
	name: "alive",
	category: "misc",
	desc: "Is bot alive",
	async mbb({msg, text, conn }) {
      await sendAlive(conn, msg, text);
	}
}
