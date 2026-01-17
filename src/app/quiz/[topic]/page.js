"use client";

import { useState } from "react";

export default function QuizPage({ params }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  async function submitAnswer() {
    console.log("SUBMIT CLICKED");

    try {
      const res = await fetch("/api/quiz/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        question:
        "What is the main difference between an array and a linked list?"
        }),

      });

      const data = await res.json();
      setFeedback(data.feedback || "No feedback received");
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      setFeedback("Frontend failed");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Quiz Topic: {params.topic}</h1>

      <p>
        What is the main difference between an array and a linked list?
      </p>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={submitAnswer}>Submit</button>

      {feedback && (
        <div
          style={{
            marginTop: 20,
            padding: 16,
            border: "1px solid #ccc",
          }}
        >
          <strong>Evaluation Feedback</strong>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}
