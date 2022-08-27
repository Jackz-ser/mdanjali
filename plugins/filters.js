const {getString,parseMessage} = require('../lib/');
const FilterDb = require('../lib/database/filters');

module.exports = {
name: "filter", 
desc: "Make filters for chat",
async mbb({ msg, text, conn }) {
    match = text.match(/[\'\"\"](.*?)[\'\"\"]/gsm);

    if (match === null) {
        filters = await FilterDb.getFilter(msg.jid);
        if (filterer === false) {
            await msg.reply("_NO FILTER FOUND_")
        } else {
            var message = "FILTERS IN THIS CHAT" + '\n';
            filtreler.map((filter) => message += '```' + filter.dataValues.pattern + '```\n');
            await message.reply(message);
        }
    } else {
        if (match.length < 2) {
            return await msg.reply("INCORRECT FORMAT");
        }
        await FilterDb.setFilter(msg.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '') , match[0][0] === "'" ? true : false);
        await msg.reply("ADDED TO FILTER".replace('{}', match[0].replace(/['"]+/g, '')));
    }
});

module.exports = {
 name: "stop",
 desc: "Stops a filter",
async mbb({ msg, text, conn }) {
    match = text.match(/[\'\"\"](.*?)[\'\"\"]/gsm);
    if (match === null) {
        return await msg.reply("ENTER FILTER")
    }

    del = await FilterDb.deleteFilter(msg.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await msg.reply("THERE IS NO FILTER")
    } else {
        await message.reply("ALREADY DELETED")
    }
});


module.exports = {
 on: 'text',
 async mbb({ msg, text, conn }) {
    var filters = await FilterDb.getFilter(msg.jid);
    if (!filterer) return;
    filters.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(msg.text)) {
            	await conn.sendMessage(msg.jid, await parseMessage(msg.jid, msg.sender, conn, filter.dataValues.text), { quoted: msg })
            }
        }
    );
});
