'use client';
import { motion } from 'framer-motion';

export default function LessonCard({ lesson, isCompleted, isLocked, onClick }) {
  return (
    <motion.div
      onClick={!isLocked ? onClick : undefined}
      whileHover={!isLocked ? { scale: 1.03 } : {}}
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        border: '2px solid #6366f1',
        background: isLocked ? '#f3f4f6' : '#eef2ff',
        cursor: isLocked ? 'not-allowed' : 'pointer',
        opacity: isLocked ? 0.6 : 1,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>{lesson.icon}</span>
        {isCompleted && <span>✓</span>}
        {isLocked && <span>🔒</span>}
      </div>

      {/* Title */}
      <h3 style={{ marginTop: '0.5rem' }}>{lesson.title}</h3>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        {lesson.description}
      </p>

      {/* Status */}
      <div
        style={{
          marginTop: '1rem',
          fontWeight: 'bold',
          color: isLocked ? '#9ca3af' : '#4338ca',
        }}
      >
        {isLocked
          ? 'LOCKED'
          : isCompleted
          ? 'COMPLETED'
          : 'START LESSON'}
      </div>
    </motion.div>
  );
}
