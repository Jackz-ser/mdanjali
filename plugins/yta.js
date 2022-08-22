const {songMeta} = require('../lib')
module.exports = {
    name: "yta",
	alias: ["ytmp3","ytaudio"],
	category: "Downloader",
	desc: "YouTube To Mp3",
    query:"_GIVE AN URL_",
    isUrl: true,
    wait: true,
    async mbb({msg,conn },{q}) {    
        let buff = await songMeta(q)
           await  conn.sendMessage(msg.from, { audio: buff, mimetype: 'audio/mpeg'},{quoted : msg})
    }
}
