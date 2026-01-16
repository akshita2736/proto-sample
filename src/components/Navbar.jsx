'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();

  return (
    
      
        <div 
          onClick={() => router.push('/')}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
        >
          DSA Quest
        
        
          <NavLink onClick={() => router.push('/dashboard')}>Dashboard
          <NavLink onClick={() => router.push('/leaderboard')}>Leaderboard
        
      
    
  );
}

function NavLink({ children, onClick }) {
  return (
    
      {children}
    
  );
}