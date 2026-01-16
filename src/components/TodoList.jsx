import useStore from "../store/useStore";
import styled from "styled-components";
import { motion } from "framer-motion";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 0 10px; 
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 500px;
`;

const ListItem = styled(motion.li)`
  background: transparent;
  padding: 12px 10px; 
  margin-bottom: 0;
  display: flex;
  align-items: center; 
  gap: 10px;          
  border-bottom: 1px solid rgba(0,0,0,0.05);

  
  @media (min-width: 600px) {
    padding: 15px 40px; 
    gap: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media (min-width: 600px) {
    gap: 10px;
  }
`;

const Text = styled.span`
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  word-break: break-word;
  flex-grow: 1;

  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 50%;
  background-repeat: no-repeat;
  
  background-size: ${props => props.$completed ? '100%' : '0%'} 2px;

  /* --- ANIMATIONEN --- */
  transition: ${props => props.$completed 
    ? 'background-size 0.6s ease-in-out, color 0.2s ease-in-out 0.6s' 
    : 'background-size 0s, color 0s'};

  color: ${props => props.$completed ? '#aaa' : '#333'};

  @media (min-width: 600px) {
    font-size: 18px; 
  }
`;

const BaseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #75746ee1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px; 
  border: 1px solid #ddd;
  flex-shrink: 0;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const CheckButton = styled(BaseButton)`
  background-color: ${props => props.$done ? '#475140e5' : ''};
  color: ${props => props.$done ? '#28a745' : '#ccc'};

 @media (hover: hover) { /* the hoover effect only activates if there is a cursur, on desktop */
    &:hover {
      background: #d4edda;
      border-color: #28a745;
      color: #28a745;
    }
  }
`;

const TrashButton = styled(BaseButton)`
  color: #ccc;

  @media (hover: hover) {
    &:hover {
      background: #fd9494;
      border-color: #ff4d4d;
      color: #ff4d4d;     
    }
  }
`;

const TodoList = () => {
    const todos = useStore((state) => state.todos);
    const toggleTodo = useStore((state) => state.toggleTodo);
    const removeTodo = useStore((state) => state.removeTodo);
    
    const sortedTodos = [...todos].sort((a, b) => {
        if (a.done === b.done) return 0;
        return a.done ? 1 : -1;
    });
    
    return(
        <ListContainer>
            <ListWrapper>
                {sortedTodos.map((todo) => (
                <ListItem 
                        key={todo.id}
                        layout 
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            mass: 1
                        }}
                    >
                    
                    <ButtonGroup>
                        <CheckButton 
                            onClick={() => toggleTodo(todo.id)}
                            $done={todo.done}
                        > 
                            &#10003; 
                        </CheckButton>

                        {!todo.done && ( 
                            <TrashButton onClick={() => removeTodo(todo.id)}>
                                &#10005; 
                            </TrashButton>
                        )}
                    </ButtonGroup>

                    <Text
                        $completed={todo.done} 
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </Text>
                    
                </ListItem>
            ))}
            </ListWrapper>
        </ListContainer>
    )
}

export default TodoList;
