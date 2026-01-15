import { useState } from "react";
import useStore from "../store/useStore";
import styled from "styled-components";

const Wrapper = styled.section `

        display: flex;
        justify-content: center; 
        align-items: center;     
        gap: 10px;               
    `;

const TodoInput = () => {
    const [text, setText] = useState('')
    const addTodo = useStore((state) => state.addTodo);


    return(
        <Wrapper>
            <input
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)} //event - updates the state
            placeholder="What do you want to do?"
            />
             {/* the input controlls react, the input field should show insde the text variable */}
            <button onClick={() => 
                {addTodo(text); //sends the text to the store
                setText(''); //empty the text after the onclick
            }}>
            Add Todo
            </button> 
        </Wrapper>
    )
};

export default TodoInput