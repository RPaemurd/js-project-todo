import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #475140;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Todo App</Title>
    </HeaderContainer>
  );
};

export default Header;
