'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    
      
        
          Learn DSA Visually 🚀
        
        
          Master data structures through interactive visualizations, games, and AI-powered learning!
        
        
        
          <button 
            onClick={() => router.push('/dashboard')}
            className="btn-primary"
          >
            Start Learning
          
          <button 
            onClick={() => router.push('/leaderboard')}
            className="btn-secondary"
          >
            Leaderboard
          
        

        
          
          
          
        
      
    
  );
}

function Feature({ icon, title, desc }) {
  return (
    
      {icon}
      {title}
      {desc}
    
  );
}