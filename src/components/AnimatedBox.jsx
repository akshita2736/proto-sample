'use client';
import { motion } from 'framer-motion';

export default function AnimatedBox({ value, index, isActive }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: '1rem',
        border: '2px solid #4f46e5',
        borderRadius: '8px',
        minWidth: '80px',
        textAlign: 'center',
        background: isActive ? '#c7d2fe' : '#eef2ff'
      }}
    >
      <div style={{ fontSize: '0.8rem', color: '#555' }}>
        Index {index}
      </div>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {value}
      </div>
    </motion.div>
  );
}
