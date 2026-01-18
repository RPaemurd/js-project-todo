import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  color: #888;
  opacity: 0.8;
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const MainText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const EmptyState = () => {
  return (
    <Wrapper 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Icon>☕️</Icon>
        <MainText>No tasks yet</MainText>
        <SubText>Add a task above to get started</SubText>
    </Wrapper>
  );
};

export default EmptyState;