const STORAGE_KEY = 'dsa_progress';

export function getProgress() {
  if (typeof window === 'undefined') return getDefaultProgress();
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return getDefaultProgress();
}

export function saveProgress(progress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getDefaultProgress() {
  return {
    xp: 0,
    level: 1,
    completedLessons: [],
    badges: []
  };
}