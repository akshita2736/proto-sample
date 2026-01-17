export async function POST(req) {
  try {
    const { question } = await req.json();

    const prompt = `
You are a professional Data Structures instructor.

Respond in clean, readable plain text.
Do NOT use markdown.
Do NOT use JSON.
Use proper paragraphs.

Explain the following question clearly for a beginner.

Question:
${question}
`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 400
          }
        })
      }
    );

    const data = await res.json();

    const parts = data?.candidates?.[0]?.content?.parts || [];
    const feedback = parts.map(p => p.text).filter(Boolean).join("\n");

    return Response.json({
      feedback: feedback || "Gemini responded but no readable text was returned."
    });
  } catch (err) {
    return Response.json(
      { feedback: err.message },
      { status: 500 }
    );
  }
}

