import GlobalStyles from "./styles/globalStyles.js";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import styled from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  min-height: 100vh;    
  padding-top: 100px;
  width: 100%;
`;

const App = () => {
  return (
    <> 
    <GlobalStyles />
    <Main>
      <Header />
      <TodoInput />
      <TodoList />
    </Main>
    </>
  );
}

export default App