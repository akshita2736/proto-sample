'use client';
import { motion } from 'framer-motion';

export default function Badge({ name }) {
  const icons = {
    'Array Explorer': '📦',
    'List Starter': '🔗',
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '999px',
        background: '#e0e7ff',
        fontWeight: 'bold'
      }}
    >
      <span>{icons[name] || '🏅'}</span>
      <span>{name}</span>
    </motion.div>
  );
}
