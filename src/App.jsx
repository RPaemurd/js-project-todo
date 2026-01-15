import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import styled from "styled-components"

const AppContainer = styled.div`

  display: flex;
  flex-direction: column; 
  align-items: center;    
  min-height: 100vh;    
  padding-top: 100px;     
`

export const App = () => {
  return (
    <AppContainer>
      <h1>My Todo App</h1>
      <TodoInput />
      <TodoList />
    </AppContainer>
  )
}
