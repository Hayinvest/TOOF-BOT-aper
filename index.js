const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN; // Telegram Bot token from Railway secrets
const BOT_URL = `https://api.telegram.org/bot${8387057499:AAE7nf51rY2dDef8FUF8X5PjYfZdtqkUOK8}/sendMessage`;

// Adsgram GET → Telegram bot POST
app.get("/reward", async (req, res) => {
  const userId = req.query.userid;

  if (!userId) {
    return res.status(400).send("Missing userid");
  }

  try {
    // Send reward message to user
    await axios.post(BOT_URL, {
      chat_id: userId,
      text: "🎉 You received a reward!"
    });

    res.status(200).send("Reward processed");
  } catch (err) {
    console.error("Error sending to bot:", err.message);
    res.status(500).send("Error processing reward");
  }
});

app.get("/", (req, res) => {
  res.send("Reward server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
