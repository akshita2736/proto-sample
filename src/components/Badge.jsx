'use client';
import { motion } from 'framer-motion';

export default function Badge({ name }) {
  const icons = {
    'Array Explorer': '📦',
    'List Starter': '🔗',
  };

  return (
    
      {icons[name] || '🏅'}
      {name}
    
  );
}