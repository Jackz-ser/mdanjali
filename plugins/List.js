const config = require('../config')
module.exports = {
    name: "list",
    alias: ["listall"],
    desc: "List all command",
    type: "main",
    async mbb({ msg, conn }, { q, map, prefix }) {
        if (q) {
            let data = []
            let name = q.toLowerCase()
            let { command, prefix } = map
            let cmd = command.get(name) || Array.from(command.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hidden") return msg.reply("No Command Found")
            else data.push(`*Name :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.use) data.push(`*Use:* ${cmd.use}`);
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}\n`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            return msg.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let teks = `Hello, ${msg.pushName} \nHere is the Command List\n\n`

            for (let type of command.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${command.list[type].filter(v => v.type !== "hidden").map((cmd) => `│⭔ ${prefix + cmd.name} ${cmd.use ? " " + cmd.use : ""}`).join("\n")}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }

            teks += `Send ${prefix}help followed by a command name to get detail of command, ex: ${prefix}help sticker`;
            let templateButtons = [
                { urlButton: { displayText: "Source Code", url: "https://instgram.com/safxr._" } },
                { urlButton: { displayText: "Main APIs", url: "http://zenzapis.xyz" } },
                { quickReplyButton: { displayText: "ping", id: `${prefix} ping` } },
                { quickReplyButton: { displayText: "Runtime", id: `${prefix} runtime` } },
                { quickReplyButton: { displayText: "Button 3", id: "nothing" } },
            ]
            
            let templateMessage = {
                image: { url: config.thumbImg },
                caption: teks,
                footer: "List test",
                templateButtons: templateButtons
            }

            conn.sendMessage(msg.from, templateMessage, { quoted: msg })
        }
    },
}
