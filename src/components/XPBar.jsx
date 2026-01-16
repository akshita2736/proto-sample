'use client';
import { motion } from 'framer-motion';

export default function XPBar({ current, max }) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {/* Label */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          fontWeight: 'bold'
        }}
      >
        <span>XP Progress</span>
        <span>
          {current} / {max}
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          height: '12px',
          background: '#e5e7eb',
          borderRadius: '999px'
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: '100%',
            background: '#6366f1',
            borderRadius: '999px'
          }}
        />
      </div>
    </div>
  );
}
