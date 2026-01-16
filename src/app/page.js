// 'use client';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const router = useRouter();

//   return (
    
      
        
//           Learn DSA Visually 🚀
        
        
//           Master data structures through interactive visualizations, games, and AI-powered learning!
        
        
        
//           <button 
//             onClick={() => router.push('/dashboard')}
//             className="btn-primary"
//           >
//             Start Learning
          
//           <button 
//             onClick={() => router.push('/leaderboard')}
//             className="btn-secondary"
//           >
//             Leaderboard
          
        

        
          
          
          
        
      
    
//   );
// }

// function Feature({ icon, title, desc }) {
//   return (
    
//       {icon}
//       {title}
//       {desc}
    
//   );
// }




'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 space-y-8">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Learn DSA Visually 🚀
      </motion.h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-xl">
        Master data structures through interactive visualizations, games, and AI-powered learning!
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/dashboard')}
          className="btn-primary"
        >
          Start Learning
        </button>

        <button
          onClick={() => router.push('/leaderboard')}
          className="btn-secondary"
        >
          Leaderboard
        </button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Feature
          icon="📊"
          title="Visual Learning"
          desc="See how data structures work step-by-step."
        />
        <Feature
          icon="🎮"
          title="Gamified Progress"
          desc="Earn XP, badges, and climb the leaderboard."
        />
        <Feature
          icon="🤖"
          title="AI Helper"
          desc="Get instant explanations and hints."
        />
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="glass p-6 rounded-xl space-y-2">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
