'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LinkedListVisualizer() {
  const [nodes, setNodes] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
  ]);
  const [newValue, setNewValue] = useState('');
  const [animating, setAnimating] = useState(false);

  const insertAtHead = () => {
    if (!newValue || animating) return;
    
    setAnimating(true);
    const newNode = { id: Date.now(), value: parseInt(newValue) };
    
    setTimeout(() => {
      setNodes([newNode, ...nodes]);
      setNewValue('');
      setAnimating(false);
    }, 500);
  };

 return (
  <div style={{ padding: '2rem' }}>
    {/* Controls */}
    <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
      <input
        type="number"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        placeholder="Value"
        className="border-2 border-indigo-300 rounded-lg px-4 py-2 w-32"
      />

      <button
        onClick={insertAtHead}
        disabled={animating}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          background: '#4f46e5',
          color: '#fff',
          fontWeight: 'bold'
        }}
      >
        Insert at Head
      </button>
    </div>

    {/* Linked list visualization */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <strong>HEAD →</strong>

      {nodes.map((node, index) => (
        <div
          key={node.id}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: '1rem',
              border: '2px solid #6366f1',
              borderRadius: '8px',
              minWidth: '80px',
              textAlign: 'center',
              background: '#eef2ff'
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#555' }}>Node</div>
            <div style={{ fontWeight: 'bold' }}>{node.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#555' }}>next</div>
          </motion.div>

          {index < nodes.length - 1 && <span>→</span>}
        </div>
      ))}

      <strong>NULL</strong>
    </div>

    {/* Footer */}
    <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
      {nodes.length} nodes in the list
    </div>
  </div>
);
}