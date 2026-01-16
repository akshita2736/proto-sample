


'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ArrayVisualizer from '@/components/ArrayVisualizer';
import LinkedListVisualizer from '@/components/LinkedListVisualizer';
import Chatbot from '@/components/Chatbot';
import { lessons } from '@/data/lessons';
import { getProgress, saveProgress } from '@/utils/storage';

export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const topic = params.topic;
  const lesson = lessons.find(l => l.id === topic);

  const [showChat, setShowChat] = useState(false);

  if (!lesson) {
    return <p className="p-6">Lesson not found</p>;
  }

  const handleComplete = () => {
    const progress = getProgress();

    if (!progress.completedLessons.includes(topic)) {
      progress.completedLessons.push(topic);
      progress.xp += 50;

      if (topic === 'arrays' && !progress.badges.includes('Array Explorer')) {
        progress.badges.push('Array Explorer');
      }

      if (topic === 'linked-lists' && !progress.badges.includes('List Starter')) {
        progress.badges.push('List Starter');
      }

      if (progress.xp >= progress.level * 100) {
        progress.level += 1;
      }

      saveProgress(progress);
    }

    router.push(`/quiz/${topic}`);
  };

  return (
    <div className="p-6 space-y-6">

      {/* Back */}
      <button
        onClick={() => router.push('/dashboard')}
        className="text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Lesson Header */}
      <div>
        <h1 className="text-2xl font-bold">
          {lesson.title} {lesson.icon}
        </h1>
        <p className="text-gray-600 mt-2">{lesson.story}</p>
      </div>

      {/* Visualizer */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Interactive Visualizer ✨
        </h2>

        {topic === 'arrays' && <ArrayVisualizer />}
        {topic === 'linked-lists' && <LinkedListVisualizer />}
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowChat(!showChat)}
          className="btn-secondary"
        >
          {showChat ? 'Hide' : 'Show'} AI Helper 🤖
        </button>

        <button
          onClick={handleComplete}
          className="btn-primary"
        >
          Take Quiz →
        </button>
      </div>

      {/* Chatbot */}
      {showChat && (
        <div className="mt-4">
          <Chatbot topic={topic} />
        </div>
      )}
    </div>
  );
}
