'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { evaluateQuizAnswer } from '@/utils/api';
import { getProgress, saveProgress } from '@/utils/storage';

export default function QuizInterface({ quiz, topic }) {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const question = quiz.questions[currentQ];

  const handleSubmit = async () => {
    const answer = answers[currentQ] || '';
    if (!answer.trim()) {
      alert('Please provide an answer!');
      return;
    }

    setLoading(true);
    try {
      const evaluation = await evaluateQuizAnswer(
        topic,
        question.question,
        answer
      );
      setResult(evaluation);

      if (evaluation.score >= 60) {
        const progress = getProgress();
        progress.xp += 30;

        if (progress.xp >= progress.level * 100) {
          progress.level += 1;
        }

        saveProgress(progress);
      }
    } catch (error) {
      console.error('Quiz evaluation failed:', error);
      alert('Failed to evaluate quiz. Please try again.');
    }
    setLoading(false);
  };

  const handleNext = () => {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setResult(null);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2>Quiz Time! 📝</h2>
        <p>
          Question {currentQ + 1} of {quiz.questions.length}
        </p>

        <div
          style={{
            height: '8px',
            borderRadius: '999px',
            background: '#e5e7eb',
            marginTop: '0.5rem'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${((currentQ + 1) / quiz.questions.length) * 100}%`,
              background: '#6366f1',
              borderRadius: '999px',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 'bold' }}>{question.question}</p>
        <textarea
          value={answers[currentQ] || ''}
          onChange={(e) =>
            setAnswers({ ...answers, [currentQ]: e.target.value })
          }
          placeholder="Write your answer in plain English..."
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '1rem',
            marginTop: '0.5rem',
            borderRadius: '8px',
            border: '2px solid #c7d2fe'
          }}
          disabled={result !== null}
        />
      </div>

      {/* Result */}
      {result && (
        <div
          style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border:
              result.score >= 60
                ? '2px solid #22c55e'
                : '2px solid #f59e0b',
            background:
              result.score >= 60 ? '#dcfce7' : '#fef3c7'
          }}
        >
          <h3>
            {result.score >= 60 ? '🎉 Great job!' : '📚 Keep learning!'}
          </h3>
          <p>Score: {result.score}/100</p>
          <p>{result.feedback}</p>
          <p>
            <strong>Tip:</strong> {result.tip}
          </p>
          {result.score >= 60 && (
            <p style={{ fontWeight: 'bold' }}>+30 XP earned!</p>
          )}
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => router.push('/dashboard')}>
          Exit Quiz
        </button>

        {result ? (
          <button onClick={handleNext}>
            {currentQ < quiz.questions.length - 1
              ? 'Next Question'
              : 'Finish'}
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Evaluating...' : 'Submit Answer'}
          </button>
        )}
      </div>
    </div>
  );
}
