const axios = require("axios");

export default async function handler(req, res) {
  const { userid } = req.query;
  const BOT_TOKEN = process.env.BOT_TOKEN; // Telegram bot token from Vercel secrets
  const BOT_URL = `https://api.telegram.org/bot${8387057499:AAE7nf51rY2dDef8FUF8X5PjYfZdtqkUOK8}/sendMessage`;

  if (!userid) {
    return res.status(400).json({ error: "Missing userid" });
  }

  try {
    await axios.post(BOT_URL, {
      chat_id: userid,
      text: "🎉 You received a reward!"
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error sending reward" });
  }
}
