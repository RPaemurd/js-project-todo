import { create } from 'zustand'


const useStore = create((set) => ({ //the variabel that is my store, the function create wants a function as an input and return an objekt
    todos: [],

    //Actions
    addTodo: (text) => set((state) => ({ //

        todos:[ 
            ...state.todos, //show the old todos first and make the new to do after
        {
            id: Date.now(), //a unique ID based on the date and time
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
    
}))


export default useStore