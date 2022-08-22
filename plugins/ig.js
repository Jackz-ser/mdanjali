const {igdl} = require('../lib')
module.exports = {
    name: "insta",
	alias: ["instagram"],
	category: "Downloader",
	desc: "Instagram Downloader",
    query:"_ENTER AN URL_",
    isUrl: true,
    wait: true,
    async mbb({msg,conn },{q}) {    
        if (!q.includes('www.instagram.com')) return msg.reply("*INVALID LINK*")
        let url = await igdl(q)
       let buff = await conn.getBuffer(url[0].url)
          await  conn.sendFile(msg.from, buff,'', "", msg,{quoted:msg})
    }
}
