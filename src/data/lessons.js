export const lessons = [
  {
    id: 'arrays',
    title: 'Arrays',
    icon: '📦',
    description: 'Learn about storing items in a row',
    locked: false,
    story: `Imagine you have a row of toy boxes, numbered 0, 1, 2, 3...

Each box holds one toy. To find a toy, you just need to know its box number!

That's exactly what an array is - a line of boxes (memory spaces) where each box has:
- An INDEX (its position number, starting from 0)
- A VALUE (the item stored inside)

Why use arrays?
✅ Super fast to access any item (just use its index)
✅ Easy to loop through all items
✅ Items stay in order

The catch? Once you create the row of boxes, it's hard to add more boxes in the middle!

Let's see it in action below...`
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    icon: '🔗',
    description: 'Connect nodes like a chain',
    locked: false,
    story: `Imagine you have toy train cars. Each car:
- Holds a toy (the DATA)
- Is connected to the next car (the POINTER)

This is a LINKED LIST! Unlike arrays (fixed row of boxes), linked lists are flexible chains.

Each "car" is called a NODE:
- NODE = DATA + POINTER to next node
- The first node is called the HEAD
- The last node points to NULL (end of chain)

Why use linked lists?
✅ Easy to insert new nodes (just reconnect the chain)
✅ Easy to delete nodes
✅ Can grow as much as you want

The catch? To find item #5, you must start at the head and follow the chain... slower than arrays!

Let's visualize it below...`
  },
  {
    id: 'stacks',
    title: 'Stacks',
    icon: '📚',
    description: 'Last in, first out - like plates!',
    locked: true,
  },
  {
    id: 'queues',
    title: 'Queues',
    icon: '🚶',
    description: 'First in, first out - like a line',
    locked: true,
  }
];

