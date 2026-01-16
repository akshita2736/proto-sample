'use client';
import { useParams, useRouter } from 'next/navigation';
import QuizInterface from '@/components/QuizInterface';
import { quizzes } from '@/data/quizzes';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topic = params.topic;
  const quiz = quizzes[topic];

  if (!quiz) {
    return Quiz not found;
  }

  return (
    
      <button
        onClick={() => router.push('/dashboard')}
        className="text-indigo-600 mb-4 hover:underline"
      >
        ← Back to Dashboard
      
      
    
  );
}