const { mp3Cutter } = require("../lib");

module.exports = {
  name: "trim",
  category: "Tools",
  desc: "trims the audio",
  query: "_Give a start and end time_ \n\n _Example_ : *trim 5:20*",
  isQuoted: true,
  isMedia: {
    isQAudio: true,
  },
  async mbb({ msg, conn }, { q }) {
    let [start, end] = q.split(":");
    if (!end) return msg.reply("_FORMAT ERROR_ \n\n _EXAMPLE : trim 5:20_");
    const { quoted, from } = msg;
    let media = await quoted.download();
    let audio = await mp3Cutter(media, start, end);
    await conn.sendMessage(
      from,
      { audio: audio, mimetype: "audio/mpeg", fileName: `ANJALI MD` },
      { quoted: msg }
    );
  },
};
