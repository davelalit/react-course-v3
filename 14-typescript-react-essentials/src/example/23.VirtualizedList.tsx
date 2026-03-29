import React from 'react';
// import { FixedSizeList as List } from 'react-window';
// Install with `npm install react-window`
interface ItemData {
  id: number;
  name: string;
}
const items: ItemData[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
}));
// Row component receives index and style props from react-window
const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
  const item = items[index];
// The style prop is crucial for positioning the item correctly
  return (
    <div style={style} className="row-item">
      {item.name}
    </div>
  );
};
const VirtualizedList: React.FC = () => ( <></>
//   <List
//     height={400}      // Height of the list container
//     itemCount={items.length} // Total number of items
//     itemSize={35}      // Height of each item
//     width="100%"     // Width of the list container
//   >
//     {Row}
//   </List>
);
export default VirtualizedList;
