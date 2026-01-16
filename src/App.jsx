import GlobalStyles from "./styles/globalStyles.js";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import styled from "styled-components"
import useStore from "./store/useStore.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  min-height: 100vh;    
  padding-top: 80px;
  width: 100%;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  max-width: 300px; 
`;

const CounterText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0; 
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.$percent}%;
  background-color: #28a745; 
  
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const App = () => {

  const todos = useStore((state) => state.todos); //getting the todos for counting

  const total = todos.length; 
  const completed = todos.filter(t => t.done).length;
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <> 
    <GlobalStyles />
    <AppContainer>
      <Header />
      <CounterContainer>
        <CounterText>
           {completed} of {total} tasks completed
        </CounterText>
        
        <ProgressBar>
          <ProgressFill $percent={percentage} />
        </ProgressBar>
      </CounterContainer>
      <TodoInput />
      <TodoList />
    </AppContainer>
    </>
  );
}

export default App