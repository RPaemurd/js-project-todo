import useStore from "../store/useStore";

const TodoList = () => {

    const { todos, toggleTodo, removeTodo } = useStore((state) => ({
        todos: state.todos,
        toggleTodo: state.toggleTodo,
        removeTodo: state.removeTodo
    }));

    return(
        <div className="list-container">
            
            <ul>{todos.map((todo) => (  //map through every todo in the list 
                <li key={todo.id}>
                    {todo.text}     {/* Here we use the id we created before */}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TodoList