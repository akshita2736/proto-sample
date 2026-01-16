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
      const evaluation = await evaluateQuizAnswer(topic, question.question, answer);
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
    
      
        
          Quiz Time! 📝
          
            Question {currentQ + 1} of {quiz.questions.length}
          
        
        
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / quiz.questions.length) * 100}%` }}
          />
        
      

      
        {question.question}
        <textarea
          value={answers[currentQ] || ''}
          onChange={(e) => setAnswers({ ...answers, [currentQ]: e.target.value })}
          placeholder="Write your answer in plain English..."
          className="w-full border-2 border-indigo-300 rounded-lg p-4 h-32 resize-none"
          disabled={result !== null}
        />
      

      {result ? (
        = 60 ? 'bg-green-100 border-2 border-green-400' : 'bg-yellow-100 border-2 border-yellow-400'
          }`}
        >
          
            
              {result.score >= 60 ? '🎉 Great job!' : '📚 Keep learning!'}
            
            {result.score}/100
          
          {result.feedback}
          
            Tip: {result.tip}
          
          {result.score >= 60 && (
            +30 XP earned!
          )}
        
      ) : null}

      
        <button
          onClick={() => router.push('/dashboard')}
          className="btn-secondary"
        >
          Exit Quiz
        
        {result ? (
          
            {currentQ < quiz.questions.length - 1 ? 'Next Question' : 'Finish'}
          
        ) : (
          
            {loading ? 'Evaluating...' : 'Submit Answer'}
          
        )}
      
    
  );
}