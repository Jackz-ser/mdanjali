/*
const {instagram} = require('../lib')
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
        let url = await instagram(q)
       let buff = await conn.getBuffer(url[0].url)
          await  conn.sendFile(msg.from, buff,'', "", msg,{quoted:msg})
    }
}
*/

const {fetchUrl} = require('../lib')
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
        let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram", { url(text)[0] }, "apikey"))
        for (let i of fetch.result) conn.sendFile(msg.from, i, "", msg, { caption: `Download Media From : ${url(text)[0]}` })
       { quoted:msg }
    }
}
