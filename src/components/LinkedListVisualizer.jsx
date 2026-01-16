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
    
      
        
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Value"
            className="border-2 border-indigo-300 rounded-lg px-4 py-2 w-32"
          />
          
            Insert at Head
          
        
      

      
        HEAD →
        {nodes.map((node, index) => (
          
            
              
                Node
                {node.value}
                next →
              
            
            {index < nodes.length - 1 && (
              →
            )}
          
        ))}
        NULL
      

      
        {nodes.length} nodes in the list
      
    
  );
}