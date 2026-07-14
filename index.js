require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");


const bot = new TelegramBot(
  process.env.BOT_TOKEN,
  {
    polling: true
  }
);


const ADMIN_ID = "8854496824";


// Start message
bot.onText(/\/start/, (msg) => {

  bot.sendMessage(
    msg.chat.id,
`👋 Welcome to CineXClub Admin Bot

Please tell us what help you need.

📩 Send your message here and our admin will reply soon.`
  );

});


// User messages
bot.on("message", async (msg) => {


  if (msg.text && msg.text.startsWith("/")) {
    return;
  }


  if (msg.from.id.toString() === ADMIN_ID) {
    return;
  }


  await bot.sendMessage(
    ADMIN_ID,
`📩 New User Message

👤 User ID:
${msg.from.id}

💬 Message:
${msg.text || "Media/File"}`
  );


});


bot.on("polling_error", (err)=>{
  console.log(
    "Error:",
    err.message
  );
});


console.log("🤖 Admin Bot Started");
