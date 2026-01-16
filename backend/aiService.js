const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function evaluateQuiz(topic, question, answer) {
  const prompt = `You are evaluating a beginner's understanding of ${topic}.

Question: ${question}
Student's Answer: ${answer}

Evaluate based on:
1. Conceptual clarity (not code)
2. Correctness
3. Understanding of high-level time/space ideas

Respond ONLY in this JSON format:
{
  "score": ,
  "feedback": "",
  "tip": ""
}`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const response = result.response;
    const text = response.text();
    
    // Clean up potential markdown code blocks
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const jsonResult = JSON.parse(cleanText);
    
    return jsonResult;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

async function getChatResponse(message, currentTopic) {
  const topicContext = currentTopic === 'arrays' 
    ? 'The student is learning about arrays (boxes in a row with indexes).'
    : 'The student is learning about linked lists (connected nodes with pointers).';

  const prompt = `${topicContext}

Student asks: ${message}

Respond like a friendly tutor using:
- Simple analogies (boxes, chains, toy trains)
- No code at all
- 2-3 sentences max
- Encouraging tone`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 150,
      },
    });

    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

module.exports = { evaluateQuiz, getChatResponse };