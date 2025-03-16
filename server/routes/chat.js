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

router.get('/reset', (req, res) => {
  res.send('it works');
});

router.post('/reset', async (req, res) => {
  try {
    const db = req.app.locals.db;
    await db.collection('AiBot').updateOne(
      { name: 'MatteBot' }, 
      { $set: { conversation: '' } },
      { upsert: true }
    );
    res.json({ success: true, message: 'Conversation reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to reset conversation' });
  }
});

router.post('/send', async (req, res) => {
  const db = req.app.locals.db;

  try {
    const { message, context } = req.body;

    console.log('context from client:', context);
    if (!message) {
      return res.status(400).json({ error: 'no message' });
    }

    let botData = await db.collection('AiBot').findOne({ name: 'MatteBot' });

    if (!botData) {
      console.log('does not exist');
      botData = { name: 'MatteBot', role: 'system', conversation: '' };
      await db.collection('AiBot').insertOne(botData);
    }

    console.log(botData.content);

    const normalizedContext = Array.isArray(context) ? context : [];

    const messages = [
      { role: 'system', content: botData.role },
      ...normalizedContext.map((c) => ({ role: c.role, content: c.content })),
      { role: 'user', content: message },
    ];

    console.log(messages);

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });

    const chatAnswer = chatResponse.choices[0].message.content;

    botData.conversation += `\nUser: ${message}\nBot: ${chatAnswer}\n`;
    await db
      .collection('AiBot')
      .updateOne(
        { name: 'MatteBot' },
        { $set: { conversation: botData.conversation } }
      );

    res.json({
      message: chatAnswer,
      conversation: botData.conversation,
      context: messages,
    });
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
