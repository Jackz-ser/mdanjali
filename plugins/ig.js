const igdl = require('@bochilteam/scraper')
module.exports = {
      name: "insta",
        category: "Downloader",
	desc: "Instagram Downloader",
    query:"Give A url",
    isUrl: true,
    wait: true,
    async mbb({msg,conn},{q}) {    
if (!q.includes('instagram.com')) return msg.reply("Enter an Instagram link")

    igdl.savefrom(q)

    .then(async(result) => {	  	                                	                      	            

  for(let i of result.url) {		

  if(i.url.includes('mp4')){		           			    				

let link = await getBuffer(i.url)

      await conn.sendMessage(msg.chat, { video: link, caption: `*INSTAGRAM DOWNLOADER*` }, { quoted: msg })                  

     }

    }

  }).catch((err) => conn.sendMessage(`*Sorry, server error*`))

  }		
