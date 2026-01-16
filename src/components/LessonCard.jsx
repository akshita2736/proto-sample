'use client';
import { motion } from 'framer-motion';

export default function LessonCard({ lesson, isCompleted, isLocked, onClick }) {
  return (
    
      
        {lesson.icon}
        {isCompleted && ✓}
        {isLocked && 🔒}
      
      {lesson.title}
      {lesson.description}
      
        {isLocked ? 'LOCKED' : isCompleted ? 'COMPLETED' : 'START LESSON'}
      
    
  );
}