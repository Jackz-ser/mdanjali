
const {fetchUrl} = require('../lib')
const config = require('./config')
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
        let fetch = await fetchUrl(`https://zenzapis.xyz/downloader/instagram=${url(text)[0]}&25a71023e0`)
        for (let i of fetch.result) conn.sendFile(msg.from, i, "", msg, { caption: `Download Media From : ${url(text)[0]}` })
       { quoted:msg }
    }
}
