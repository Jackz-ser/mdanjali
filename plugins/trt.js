const config = require('../config');
const { trt } = require('../lib');
module.exports = {
    name: "trt",
    alias:['translate'],
    desc:"Translate",
    category: "Tools",
    query:'_ENTER A TEXT TO TRANSLATE_ \n _Example: text ; en',
    async mbb({ msg, conn },{q}) {
    let [text,lang] = q.split(';')
    lang = q.split(';')[1]||config.LANGUAGE
    trt(text, {from:'auto',to:lang}).then((s)=>{
       return msg.reply(s.text)
      })

    

      }
    }
