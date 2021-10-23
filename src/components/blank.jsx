import { Send } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;



const blank = () => {
  return (
    <Container>
      <Title></Title>
   
    
    </Container>
  );
};

export default blank;
