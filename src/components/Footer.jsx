import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import '../index.css';


const Container = styled.div`
  display: flex;
   background-color:var(--orange);

`;

const Left = styled.div`
margin-left:240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media only screen and (max-width: 380px) {
    margin-left:40px;
    flex: 1;
    font-weight:600;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size:11px;
       }
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: column;
  margin-left:280px;
  margin-top:-10px;
 
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20%;
  color: black;

  display: flex;
  margin:4px 10px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

`;

const Title = styled.h3`
  margin-bottom: 30px;
  color:var(--wh);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin-right:220px;
  padding: 20px;

  


`;

const ContactItem = styled.div`
  margin-bottom: 30px;
 
  display: flex;
  align-items: center;

  
  @media only screen and (max-width: 380px) {
  
    margin-left:-30px;
    padding: 0px;
    font-size:11px;
       }
`;


const Footer = () => {
  return (
    <Container>
      <Left>
     
     
       
        <Title>Our Social Media</Title>
        <SocialIcon color="3B5999">
        <Facebook style={{marginRight:"10px"}} /> Facebook
          </SocialIcon>  
        <SocialIcon color="E4405F">
        <Instagram  style={{marginRight:"10px"}}/> Instgram
          </SocialIcon>  
        <SocialIcon color="55ACEE">
        <Twitter style={{marginRight:"10px"}} />  Twitter
          </SocialIcon>  

         
      </Left>
      <Center>
        <Title></Title>
        <List>
         
         
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Sudan , Khartoum 123 Street
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 00249127
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> moaaz@gmail.com
        </ContactItem>
       
      </Right>
    </Container>
  );
};

export default Footer;
