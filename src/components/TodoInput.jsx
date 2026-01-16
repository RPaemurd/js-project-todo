import { useState } from "react";
import useStore from "../store/useStore";
import styled from "styled-components";

const Wrapper = styled.form `

        display: flex;
        justify-content: center; 
        align-items: center;     
        gap: 10px;               
    `;

const StyledInput = styled.input`
    background: transparent;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #3a393888;
    font-size: 16px;
    width: 250px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #475140;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;

const TodoInput = () => {
    const [text, setText] = useState('')
    const addTodo = useStore((state) => state.addTodo);

    const handleSubmit = (e) => { //adds a new todo by pressing enter and the button
        e.preventDefault(); //stops the site from reloading

        if (!text.trim()) return;
        addTodo(text);
        setText('');
    }

    return(
        <Wrapper onSubmit={handleSubmit}>
            <StyledInput
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)} //event - updates the state
            placeholder="What do you want to do?"/>
            <Button type="submit">
            Add
            </Button> 
        </Wrapper>
    )
};

export default TodoInput