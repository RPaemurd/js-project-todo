import useStore from "../store/useStore";
import styled from "styled-components";

    const ListContainer = styled.div`
        display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    `;

    const ListWrapper = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
    `;

    const ListItem = styled.li`
    background: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

    const Text = styled.span`
    cursor: pointer;
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
    color: ${props => props.$completed ? '#888' : '#000'};
    flex-grow: 1; /* Gör att texten tar upp all plats som blir över */
    `;

    const DeleteButton = styled.button`
    background: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 10px;
  
    &:hover {
    background: #cc0000;
    }
    `;

const TodoList = () => {

        const todos = useStore((state) => state.todos);
        const toggleTodo = useStore((state) => state.toggleTodo);
        const removeTodo = useStore((state) => state.removeTodo);
    

    return(
        <ListContainer>

            <ListWrapper>{todos.map((todo) => (  //map through every todo in the list 
                <ListItem key={todo.id}>
                    <Text
                    $completed={todo.done} 
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </Text>
                        {/* Here we use the id we created before */}
                    <DeleteButton onClick={() => removeTodo(todo.id)}>
                        Radera
                    </DeleteButton>
                </ListItem>
            ))}
            </ListWrapper>
        </ListContainer>
    )
}

export default TodoList