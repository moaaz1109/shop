import styled from "styled-components";
import Navbar from "../components/Navbar";


import Footer from "../components/Footer";
import './register.css'
import '../index.css';



const Container = styled.div`

  width: 100vw;
  height:100%;

  background-color: var(  --orange);
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 380px) {
  
    }
`;

const Wrapper = styled.div`
padding:20px;
  width: 25%;
 
  padding: 60px;
  margin:20px;
  background-color: var(--reg);
  margin-left:460px;


  @media only screen and (max-width: 380px) {
    margin-left:30px;
    padding:30px;
   
  width: 60%;
    }

`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 300;
  color:white;
  padding:1px;
  margin-top:-40px;
  margin-left:100px;
  font-weight:600;

  @media only screen and (max-width: 380px) {
    font-size: 17px;
    font-weight: 150;
    color:white;
    padding:1px;
    margin-top:-20px;
    margin-left:50px;
    font-weight:600;

    }


`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding:14px;
 
  
  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    padding:6px;

    m
   

    }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 13px;
  margin-right:40px;

  @media only screen and (max-width: 380px) {
    flex: 1;
    min-width: 20%;
    margin: 4px 0;
    padding: 5px;
    margin-right:20px;

    }
`;

const Button = styled.button`
  width: 36%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  font-weight:600;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right:55px;
  margin-left:70px;

  &:hover{
    background-color:yellow;
    color: blue;
    width:42%;
  }

  @media only screen and (max-width: 380px) {
    width: 30%;
    border: none;
    padding: 2px 0px;
    background-color: teal;
    color: white;
    font-weight:600;
    cursor: pointer;
    margin-bottom: 2px;
    margin-right:20px;
    margin-left:50px;

    }


`;



const Login = () => {
  return (
    <Container>
     <Navbar />
     
      <Wrapper>
        <Title>Login</Title>
        <Form>
     
          <Input placeholder="Email" type="Email"/>
          <Input placeholder="password" type="password"/>
        
          <Button>Submit</Button>
         
        
  </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
