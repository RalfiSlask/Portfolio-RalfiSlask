var express = require('express');
var router = express.Router();
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/send', async (req, res) => {
  const db = req.app.locals.db;

  try {
    const { message, context } = req.body;
    console.log('context', context);
    if (!message) {
      return res.status(400).json({ error: 'no message' });
    }

    const botData = await db.collection('AiBot').findOne({ name: 'MatteBot' });

    if (!botData) {
      console.log('dont exist');
      botData = { name: 'MatteBot', role: '', conversation: '' };
      await db.collection('AiBot').insertOne(botData);
    }
    console.log('does exist:', botData.conversation, botData.role);

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: botData.role },
        { role: 'user', content: req.body.message },
      ],
    });

    const chatAnswer = chatResponse.choices[0].message.content;

    botData.conversation += `\nUser: ${message}\nBot: ${chatAnswer}\n`;
    await db
      .collection('AiBot')
      .updateOne(
        { name: 'MatteBot' },
        { $set: { conversation: botData.conversation } }
      );

    res.json({ message: chatAnswer, conversation: botData.conversation });
  } catch (err) {
    console.log(err, 'something went wrong');
    res.status(500).json({
      err: 'something went wrong on the server, failed to generate chat',
    });
  }
});

router.post('/send/audio', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'no message provided' });
    }

    const audioResponse = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: message,
    });

    res.setHeader('Content-Type', 'audio/mpeg');
    audioResponse.body.pipe(res);
  } catch (err) {
    console.error('something went wrong');
    res.status(500).json({ error: 'Failed to stream audio' });
  }
});

module.exports = router;
