'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '2px solid #e5e7eb'
      }}
    >
      {/* Logo */}
      <div
        onClick={() => router.push('/')}
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
      >
        DSA Quest
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink onClick={() => router.push('/dashboard')}>
          Dashboard
        </NavLink>

        <NavLink onClick={() => router.push('/leaderboard')}>
          Leaderboard
        </NavLink>
      </div>
    </motion.nav>
  );
}

function NavLink({ children, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {children}
    </span>
  );
}
