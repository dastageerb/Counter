import { useState, useEffect } from 'react';
import { LandingPage } from './landing/page';

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    if (params.has('dark')) {
      return params.get('dark') === '1' || params.get('dark') === 'true';
    }
    const saved = localStorage.getItem('counter-theme');
    if (saved) return saved === 'dark';
    return false; // Default to white mode
  });

  useEffect(() => {
    localStorage.setItem('counter-theme', dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#06070b';
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0f172a';
    }
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return <LandingPage dark={dark} onToggleTheme={toggleTheme} />;
}
