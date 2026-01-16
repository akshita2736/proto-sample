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
    return <p className="p-6">Quiz not found</p>;
  }

  return (
    <div className="p-6 space-y-6">

      {/* Back */}
      <button
        onClick={() => router.push('/dashboard')}
        className="text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Quiz */}
      <QuizInterface quiz={quiz} topic={topic} />

    </div>
  );
}
