const { igdl } = require('../lib/scrapers')
module.exports = {
    name: "insta",
	alias: ["instagram"],
	category: "Downloader",
	desc: "Instagram Downloader",
    query:"_ENTER AN URL_",
    isUrl: true,
    wait: true,
    async mbb({msg,conn },{q}) {    
        if (!q.includes('www.instagram.com')) return msg.reply("Invalid Link")
     igdl(q).then(async res => {
        let igdl = JSON.stringify(res)
        let json = JSON.parse(igdl)
        for (let { downloadUrl, type } of json) {
          conn.sendFile(msg.from, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), {quoted:msg})
            }
         }
    }
}


/*
igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), {quoted:msg})
    }

try{
    if (!q.includes('www.instagram.com')) return msg.reply("*INVALID LINK*")
    await conn.sendMessage("_*DOWNLOADING...*_")
    res = await igdl(match[1])
    ytm = res.result
    let buff = await conn.getBuffer(`${ytm.link}`)
    const insta = `${ytm.link}`
    await conn.sendFile(msg.from, buff, "", msg, { quoted:msg })
  } 
  catch
  {
     await conn.sendMessage("error")
  }
}};
*/
