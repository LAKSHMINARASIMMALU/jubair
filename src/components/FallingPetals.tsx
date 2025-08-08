import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      'bg-gradient-to-br from-purple-300 to-purple-400',
      'bg-gradient-to-br from-pink-300 to-pink-400',
      'bg-gradient-to-br from-rose-300 to-rose-400',
      'bg-gradient-to-br from-orange-300 to-orange-400',
      'bg-gradient-to-br from-yellow-300 to-yellow-400',
      'bg-gradient-to-br from-teal-300 to-teal-400',
      'bg-gradient-to-br from-emerald-300 to-emerald-400',
    ];

    const newPetals: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5000,
      duration: 3000 + Math.random() * 2000,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 10 + Math.random() * 12,
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute rounded-full ${petal.color} opacity-70 animate-fall shadow-lg`}
          style={{
            left: `${petal.x}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}ms`,
            animationDuration: `${petal.duration}ms`,
            top: '-20px',
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;