import React, { useState, useCallback, memo } from 'react';
export interface ItemProps {
  item: { id: number; name: string };
  onClick: (id: number) => void;
}
// Memoize the child component
const ListItem = memo(({ item, onClick }: ItemProps) => {
  console.log(`Rendering item: ${item.name}`);
  return (
    <div onClick={() => onClick(item.id)}>
      {item.name}
    </div>
  );
});
export interface ListProps {
  items: { id: number; name: string }[];
}
const OptimizedList: React.FC<ListProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
// Memoize the click handler using useCallback
  const handleClick = useCallback((id: number) => {
    setActiveId(id);
    console.log(`Item ${id} clicked`);
  }, []); // Empty dependency array means the function is created once
return (
    <div>
      {items.map((item) => (
        // Pass the stable memoized function to the memoized child
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};
export default OptimizedList;