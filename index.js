require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(
  process.env.BOT_TOKEN,
  {
    polling: true
  }
);
const http = require("http");

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Admin Bot Running");
}).listen(PORT, () => {
  console.log("🌐 Server running on " + PORT);
});
