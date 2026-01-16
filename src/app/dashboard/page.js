'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import XPBar from '@/components/XPBar';
import LessonCard from '@/components/LessonCard';
import Badge from '@/components/Badge';
import { getProgress, saveProgress } from '@/utils/storage';
import { lessons } from '@/data/lessons';

export default function Dashboard() {
  const router = useRouter();
  const [progress, setProgress] = useState({
    xp: 0,
    level: 1,
    completedLessons: [],
    badges: []
  });

  useEffect(() => {
    const saved = getProgress();
    if (saved) setProgress(saved);
  }, []);

  return (
    
      
        
          
            
              Welcome back, Explorer! 👋
            
            Continue your DSA journey
          
          
            Level {progress.level}
            {progress.xp} XP
          
        

        

        
          Your Badges 🏆
          
            {progress.badges.length === 0 ? (
              No badges yet. Complete lessons to earn them!
            ) : (
              progress.badges.map((badge, i) => )
            )}
          
        

        
          Learning Path 🛤️
          
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={progress.completedLessons.includes(lesson.id)}
                isLocked={lesson.locked}
                onClick={() => {
                  if (!lesson.locked) {
                    router.push(`/learn/${lesson.id}`);
                  }
                }}
              />
            ))}
          
        
      
    
  );
}