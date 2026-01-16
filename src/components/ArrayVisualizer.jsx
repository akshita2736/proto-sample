'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBox from './AnimatedBox';

export default function ArrayVisualizer() {
  const [array] = useState([10, 25, 30, 45, 50]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const traverse = async () => {
    setIsPlaying(true);
    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    setCurrentIndex(-1);
    setIsPlaying(false);
  };

  const next = () => {
    if (currentIndex < array.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reset = () => {
    setCurrentIndex(-1);
    setIsPlaying(false);
  };

return (
  <div style={{ padding: '2rem' }}>
    {/* Array boxes */}
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}
    >
      {array.map((value, index) => (
        <AnimatedBox
          key={index}
          value={value}
          index={index}
          isActive={currentIndex === index}
        />
      ))}
    </div>

    {/* Current pointer info */}
    {currentIndex >= 0 && (
      <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        Current Index: {currentIndex} | Value: {array[currentIndex]}
      </div>
    )}

    {/* Controls */}
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={prev} disabled={currentIndex <= 0}>
        ← Previous
      </button>

      <button onClick={traverse} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : '▶ Auto Play'}
      </button>

      <button onClick={next} disabled={currentIndex >= array.length - 1}>
        Next →
      </button>

      <button onClick={reset}>
        ↺ Reset
      </button>
    </div>
  </div>
);
}
