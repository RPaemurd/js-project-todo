import { useState } from "react";
import useStore from "../store/useStore";
import styled from "styled-components";

const Wrapper = styled.form`
    display: flex;
    justify-content: center; 
    align-items: center;     
    gap: 10px;
    
    width: 100%;      
    max-width: 500px;  
    padding: 0 10px;   
    margin-bottom: 20px; 
`;

const StyledInput = styled.input`
    background: transparent;
    padding: 12px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.17);
    font-size: 16px; 
    
    flex: 1; 
    min-width: 0;

    &:focus {
        outline: none;
        border-color: #475140; 
    }
`;

const Button = styled.button`
    padding: 12px 20px;
    background-color: #475140;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    
    flex-shrink: 0; 
    white-space: nowrap;

    &:hover {
        background-color: #3b4036; 
    }
`;

const TodoInput = () => {
    const [text, setText] = useState('')
    const addTodo = useStore((state) => state.addTodo);

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        if (!text.trim()) return;
        addTodo(text);
        setText('');
    }

    return(
        <Wrapper name="form" id="text" onSubmit={handleSubmit}>
            <StyledInput 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)} 
                placeholder="What do you want to do?"
            />
            <Button type="submit">
                Add
            </Button> 
        </Wrapper>
    )
};

export default TodoInput;