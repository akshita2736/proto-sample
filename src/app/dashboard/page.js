// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
// import XPBar from '@/components/XPBar';
// import LessonCard from '@/components/LessonCard';
// import Badge from '@/components/Badge';
// import { getProgress, saveProgress } from '@/utils/storage';
// import { lessons } from '@/data/lessons';

// export default function Dashboard() {
//   const router = useRouter();
//   const [progress, setProgress] = useState({
//     xp: 0,
//     level: 1,
//     completedLessons: [],
//     badges: []
//   });

//   useEffect(() => {
//     const saved = getProgress();
//     if (saved) setProgress(saved);
//   }, []);

//   return (
    
      
        
          
            
//               Welcome back, Explorer! 👋
            
//             Continue your DSA journey
          
          
//             Level {progress.level}
//             {progress.xp} XP
          
        

        

        
//           Your Badges 🏆
          
//             {progress.badges.length === 0 ? (
//               No badges yet. Complete lessons to earn them!
//             ) : (
//               progress.badges.map((badge, i) => )
//             )}
          
        

        
//           Learning Path 🛤️
          
//             {lessons.map((lesson) => (
//               <LessonCard
//                 key={lesson.id}
//                 lesson={lesson}
//                 isCompleted={progress.completedLessons.includes(lesson.id)}
//                 isLocked={lesson.locked}
//                 onClick={() => {
//                   if (!lesson.locked) {
//                     router.push(`/learn/${lesson.id}`);
//                   }
//                 }}
//               />
//             ))}
          
        
      
    
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import XPBar from '@/components/XPBar';
import LessonCard from '@/components/LessonCard';
import Badge from '@/components/Badge';
import { getProgress } from '@/utils/storage';
import { lessons } from '@/data/lessons';

export default function Dashboard() {
  const router = useRouter();

  const [progress, setProgress] = useState({
    xp: 0,
    level: 1,
    completedLessons: [],
    badges: []
  });

  useEffect(() => {
    const saved = getProgress();
    if (saved) setProgress(saved);
  }, []);

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Explorer! 👋</h1>
          <p className="text-gray-500">Continue your DSA journey</p>
        </div>

        <div className="text-right">
          <p className="font-semibold">Level {progress.level}</p>
          <p className="text-sm text-gray-500">{progress.xp} XP</p>
        </div>
      </div>

      <XPBar xp={progress.xp} level={progress.level} />

      {/* Badges */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Badges 🏆</h2>

        {progress.badges.length === 0 ? (
          <p className="text-gray-500">
            No badges yet. Complete lessons to earn them!
          </p>
        ) : (
          <div className="flex gap-3">
            {progress.badges.map((badge, i) => (
              <Badge key={i} badge={badge} />
            ))}
          </div>
        )}
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Learning Path 🛤️</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={progress.completedLessons.includes(lesson.id)}
              isLocked={lesson.locked}
              onClick={() => {
                if (!lesson.locked) {
                  router.push(`/learn/${lesson.id}`);
                }
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
