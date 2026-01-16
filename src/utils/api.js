// import axios from 'axios';

// const API_BASE = 'http://localhost:5000/api';

// export async function evaluateQuizAnswer(topic, question, answer) {
//   try {
//     const response = await axios.post(`${API_BASE}/quiz/evaluate`, {
//       topic,
//       question,
//       answer
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// }

// export async function getChatbotResponse(message, currentTopic) {
//   try {
//     const response = await axios.post(`${API_BASE}/chat`, {
//       message,
//       currentTopic
//     });
//     return response.data.response;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// }



import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// Evaluate quiz answer
export async function evaluateQuizAnswer(topic, question, answer) {
  try {
    const response = await axios.post(`${API_BASE}/quiz/evaluate`, {
      topic,
      question,
      answer,
    });

    return response.data;
  } catch (error) {
    console.error(
      'API Error (evaluateQuizAnswer):',
      error?.response?.data || error.message
    );
    return null; // ✅ do NOT throw during UI render
  }
}

// Chatbot response
export async function getChatbotResponse(message, currentTopic) {
  try {
    const response = await axios.post(`${API_BASE}/chat`, {
      message,
      currentTopic,
    });

    return response.data?.response || '';
  } catch (error) {
    console.error(
      'API Error (getChatbotResponse):',
      error?.response?.data || error.message
    );
    return 'Sorry, something went wrong. Try again.';
  }
}
