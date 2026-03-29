import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds: number) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{seconds} seconds remaining</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CountdownTimer initialSeconds={60} />
    </div>
  );
};

export default App;