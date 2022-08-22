const {hmodtemplate} = require('../lib')
module.exports = {
	name: "hmod",
	category: "Search",
	desc: "Do a search in happy Mod",
    query:"_Enter a query_",
	async mbb({ msg,conn},{q}) {
        let template = await hmodtemplate(q)
        if (template=== 404 ) return msg.reply("_No results Found_")
        await conn.sendMessage(msg.from, template);
	}
};
