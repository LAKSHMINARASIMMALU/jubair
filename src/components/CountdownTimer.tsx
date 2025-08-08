import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-purple-500 via-purple-600 to-pink-600' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-pink-500 via-rose-500 to-orange-500' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-orange-500 via-yellow-500 to-amber-500' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-teal-500 via-emerald-500 to-green-500' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-8 elegant-font">Countdown to Our Special Day</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-white/60 to-purple-50/40 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 transform-gpu hover:scale-105 transition-all duration-300"
          >
            <div className={`w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br ${unit.color} rounded-full flex items-center justify-center shadow-xl mb-4`}>
              <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-base md:text-lg font-bold text-gray-700">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-600 text-base md:text-lg font-medium">
          {timeLeft.days > 0 && `${timeLeft.days} days to go until our engagement ceremony!`}
          {timeLeft.days === 0 && timeLeft.hours > 0 && `Less than a day to go!`}
          {timeLeft.days === 0 && timeLeft.hours === 0 && `The big day is today!`}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;