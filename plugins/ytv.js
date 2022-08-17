let { ytv } = require("../lib");
module.exports = {
  name: "ytv",
  alias: ["ytmp4", "ytvideo", "video"],
  category: "Downloader",
  desc: "Youtube To Mp4",
  query: "_Give an url_",
  wait: true,
  isUrl: true,
  async mbb({ msg, conn }, { q }) {
    let query = await ytv(q);
    await await conn.sendMessage(
      msg.from,
      {
        video: { url: query.dl_link },
        caption: query.title,
      },
      { quoted: msg }
    );
  },
};
