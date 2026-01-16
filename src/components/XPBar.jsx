'use client';
import { motion } from 'framer-motion';

export default function XPBar({ current, max }) {
  const percentage = (current / max) * 100;

  return (
    
      
        XP Progress
        {current} / {max}
      
      
        
      
    
  );
}