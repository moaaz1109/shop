
import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import '../index.css';
import { NavLink } from 'react-router-dom';
import './navbar.css'


const Container = styled.div`
background-color: var(  --orange);
  height: 79px;
  color: var(--col);
  
  @media only screen and (max-width: 380px) {
  height:40px;
  font-size:14px;
  padding-right:0px;
  margin-right:0px;
  }

`;

const Wrapper = styled.div`
  padding: 7px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    height:40px;
    font-size:14px;
    padding: 15px -9px;
    }
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
margin-top:20px;

    @media only screen and (max-width: 380px) {
    flex:0;
     font-size:12px;
     margin-left:-18px;
       }

`;



const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  width: 50%;
  display: flex;

  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media only screen and (max-width: 380px) {
  
display:none
     }
`;

const Input = styled.input`
  border: none;
  width: 100%;

  @media only screen and (max-width: 380px) {
   
   display:none;
     }


`;

const Center = styled.div`
  flex: 1;
  text-align: center;

  @media only screen and (max-width: 380px) {
    margi-top:30px;
    
     }
`;

const Logo = styled.div`
  

  @media only screen and (max-width: 380px) {
   margin-top:-5px;
   margin-left:30px;
    
    margin-:-29px;
 
    


    
     }
  

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
margin-top:20px;
  @media only screen and (max-width: 380px) {
   margin-right:-15px;
   padding:4px 11px;
   flex: 0;
   margin: -8px;
  
     }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media only screen and (max-width: 380px) {
   
    font-size:10.5px;
    margin-left:15px;
   margin:14px 22px;
     }

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <NavLink className="navbar-L r" to="/" exact>
        Home
      </NavLink>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "white", fontSize: 16 }} />
          </SearchContainer>
        </Left>
   
          <Logo className="log">MoaazShop</Logo>
        
        <Right>
          <MenuItem>
          <NavLink className="navbar-L r" to="/Register" exact>
        Regsiter
      </NavLink>
          </MenuItem>
          <MenuItem>
          <NavLink className="navbar-L" to="/Login" exact>
        Login
      </NavLink>
          </MenuItem>
        
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
