module.exports = {
  name: "alive",
  category: "ignore",
  desc: "Is bot alive"
  } async mbb({ msg }) {
     await conn.sendMessage(msg.from, {
          text: ("I AM ALIVE"),
          }});
