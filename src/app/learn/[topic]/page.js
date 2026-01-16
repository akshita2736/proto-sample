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
    return Lesson not found;
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
    
      
        <button
          onClick={() => router.push('/dashboard')}
          className="text-indigo-600 mb-4 hover:underline"
        >
          ← Back to Dashboard
        

        
          {lesson.title} {lesson.icon}
          
            
              {lesson.story}
            
          
        

        
          Interactive Visualizer ✨
          {topic === 'arrays' && }
          {topic === 'linked-lists' && }
        

        
          <button
            onClick={() => setShowChat(!showChat)}
            className="btn-secondary"
          >
            {showChat ? 'Hide' : 'Show'} AI Helper 🤖
          
          
            Take Quiz →
          
        

        {showChat && (
          
            
          
        )}
      
    
  );
}