require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/send-message", async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.RECEIVER_NUMBER,
      body: `New Lead:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Twilio SID:", response.sid); // Check this in backend
    res.status(200).json({ success: true, sid: response.sid });
  } catch (error) {
    console.error("Twilio Error:", error); // Very important
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));