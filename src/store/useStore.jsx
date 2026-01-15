import { create } from 'zustand'
import { persist } from 'zustand/middleware' // <--- 1. Ny import här!

// 2. Vi använder persist(...) runt hela vår funktion
const useStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) => set((state) => ({
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: text,
            done: false,
            createdAt: new Date().toLocaleDateString()
          }
        ]
      })),

      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      })),

      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      }))
    }),
    {
      name: 'todo-storage', // <--- 3. Ett unikt namn för var datan ska sparas i webbläsaren
    }
  )
)

export default useStore