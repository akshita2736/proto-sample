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
    
      
        {array.map((value, index) => (
          <AnimatedBox
            key={index}
            value={value}
            index={index}
            isActive={currentIndex === index}
          />
        ))}
      

      
        {currentIndex >= 0 && (
          
            Current Index: {currentIndex} | Value: {array[currentIndex]}
          
        )}
      

      
        
          ← Previous
        
        
          {isPlaying ? 'Playing...' : '▶ Auto Play'}
        
        
          Next →
        
        
          ↺ Reset
        
      
    
  );
}