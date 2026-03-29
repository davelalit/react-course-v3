import React, { useState, useCallback, memo } from 'react';
// Memoized child component
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
const MemoizedButton = memo(({ onClick, children }: ButtonProps) => {
  console.log(`Rendering button: ${String(children)}`);
  return <button onClick={onClick}>{children}</button>;
});
const MemoizedButtonCounter: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
// Memoized callback: same reference until count1 changes
  const handleClick1 = useCallback(() => {
    setCount1(c => c + 1);
  }, []); // Empty dependency array means the function is created once
// Unmemoized function: new reference on every Counter render
  const handleClick2 = () => {
    setCount2(c => c + 1);
  };
return (
    <div>
      <MemoizedButton onClick={handleClick1}>Count 1: {count1}</MemoizedButton>
      {/* MemoizedButton will still re-render here because handleClick2 is a new function every time */}
      <MemoizedButton onClick={handleClick2}>Count 2: {count2}</MemoizedButton>
    </div>
  );
};
export default MemoizedButtonCounter;