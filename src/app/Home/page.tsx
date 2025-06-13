"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, title: "This is my Test Todo List", completed: false },
  { id: 2, title: "This is my  Second Test Todo List", completed: false },
  { id: 3, title: "Test T0do", completed: false },
  { id: 4, title: "New Todo", completed: false },
  { id: 5, title: "This is last testing", completed: false },
  { id: 6, title: "New New Todo", completed: false },
  { id: 7, title: "Only Todo", completed: false },
];

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-black dark:text-white">
      <div
        className={`dark:bg-black dark:text-white dark:border-r-1 border-white px-3 fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-0`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">My Notes</h2>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded hover:bg-gray-100"
            >
              <div className="flex items-center space-x-2 overflow-hidden">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-4 w-4 text-blue-600 dark:text-white"
                />
                <span className="text-sm truncate max-w-[180px] dark:text-black">
                  {todo.title}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 dark:text-black">
                ⋮
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Sidebar toggle button (visible only on mobile) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-4 left-4 z-40 text-gray-700"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4 text-black">📝 My Notes</h1>
          <p className="text-gray-700">
            This is the main content area. Resize the browser to see the sidebar
            behavior.
          </p>
        </main>
      </div>
    </div>
  );
}
