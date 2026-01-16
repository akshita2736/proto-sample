const express = require('express');
const router = express.Router();
const { evaluateQuiz, getChatResponse } = require('./aiService');

router.post('/quiz/evaluate', async (req, res) => {
  try {
    const { topic, question, answer } = req.body;
    const result = await evaluateQuiz(topic, question, answer);
    res.json(result);
  } catch (error) {
    console.error('Quiz evaluation error:', error);
    res.status(500).json({ error: 'Failed to evaluate quiz' });
  }
});

router.post('/chat', async (req, res) => {
  try {
    const { message, currentTopic } = req.body;
    const response = await getChatResponse(message, currentTopic);
    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to get chat response' });
  }
});

module.exports = router;