// ''use client';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
// import { leaderboardData } from '@/data/leaderboard';

// export default function Leaderboard() {
//   const router = useRouter();

//   return (
    
      
//         <button
//           onClick={() => router.push('/dashboard')}
//           className="text-indigo-600 mb-4 hover:underline"
//         >
//           ← Back to Dashboard
        

        
          
//             🏆 Leaderboard
          

          
//             {leaderboardData.map((user, index) => (
//               <motion.div
//                 key={user.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`flex items-center justify-between p-4 rounded-lg ${
//                   index === 0 ? 'bg-yellow-100 border-2 border-yellow-400' :
//                   index === 1 ? 'bg-gray-100 border-2 border-gray-400' :
//                   index === 2 ? 'bg-orange-100 border-2 border-orange-400' :
//                   'bg-white border border-gray-200'
//                 }`}
//               >
                
                  
//                     {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                  
                  
//                     {user.name}
//                     Level {user.level}
                  
                
                
//                   {user.xp} XP
//                   {user.badges} badges
                
              
//             ))}
          
        
      
    
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { leaderboardData } from '@/data/leaderboard';

export default function Leaderboard() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">

      {/* Back Button */}
      <button
        onClick={() => router.push('/dashboard')}
        className="text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center">🏆 Leaderboard</h1>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-lg ${
              index === 0
                ? 'bg-yellow-100 border-2 border-yellow-400'
                : index === 1
                ? 'bg-gray-100 border-2 border-gray-400'
                : index === 2
                ? 'bg-orange-100 border-2 border-orange-400'
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* Rank + Name */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">
                {index === 0
                  ? '🥇'
                  : index === 1
                  ? '🥈'
                  : index === 2
                  ? '🥉'
                  : `#${index + 1}`}
              </span>

              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">
                  Level {user.level}
                </p>
              </div>
            </div>

            {/* XP */}
            <div className="text-right">
              <p className="font-semibold">{user.xp} XP</p>
              <p className="text-sm text-gray-500">
                {user.badges} badges
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
