import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todo, setTodo] = useState<item[]>([
    { id: 1, text: "Finish the app", completed: false },
    { id: 2, text: "Empty a dishwasher", completed: false },
  ]);

  const [newItem, addNewItem] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = {
      id: Math.floor(Math.random() * 1000),
      text: newItem,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    addNewItem("");
  };

  return (
    <div>
      <h1>ToDo List:</h1>
      <ul>
        {todo.map((entry) => {
          return (
            <li
              key={entry.id}
              onClick={() => handleToggle(entry.id)}
              style={{
                textDecoration: entry.completed ? "line-through" : "none",
              }}
            >
              {entry.text}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Add yor item"
        value={newItem}
        onChange={(e) => addNewItem(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
