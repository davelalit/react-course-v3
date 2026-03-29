import React from 'react';
export interface ItemData {
  id: number;
  name: string;
}
interface Props {
  items: ItemData[];
}
const ListEventDelegationComponent: React.FC<Props> = ({ items }) => {
  // Define a single handler function on the parent
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Use the event target to find the clicked item's ID via a data attribute
    const idString = (e.target as HTMLElement).closest('[data-id]')?.dataset.id;
    if (idString) {
      const id = Number(idString);
      console.log(`Clicked item ID: ${id}`);
      // Perform action for the specific item
    }
  };
return (
    // Attach the single event listener to the parent div
    <div onClick={handleClick}>
      {items.map((item) => (
        // Store the item ID in a data attribute
        <div key={item.id} data-id={item.id} className="list-item">
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default ListEventDelegationComponent;