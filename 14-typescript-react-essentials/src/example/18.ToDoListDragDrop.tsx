import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoListDragDrop = () => {
  const [todos, setTodos] = useState([
    'Learn React',
    'Learn Redux',
    'Build a React App',
  ]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTodos = Array.from(todos);
    const [removed] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, removed);

    setTodos(reorderedTodos);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo} draggableId={todo} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {todo}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const App = () => {
  return (
    <div>
      <h1>Todo List with Drag-and-Drop</h1>
      <TodoListDragDrop />
    </div>
  );
};

export default App;