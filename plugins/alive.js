module.exports = {
  name: "alive",
  category: "ignore",
  desc: "Is bot alive"
  async mbb({ msg }) {
  	conn.sendMessage(msg.from, {
          text: ("I AM ALIVE"),
          }});
