import {
 
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
 
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var( --blue)
  z-index: 3;
  
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }

  @media only screen and (max-width: 380px) {
    min-width: 140px;
    height: 250px;
       }
`;

const Circle = styled.div`
  width: 210px;
  height: 220px;
  border-radius: 10%;
  background-color: var(--cir);
  position: absolute;


  @media only screen and (max-width: 380px) {
    width: 130px;
    height: 220px;
       }
`;

const Image = styled.img`
width:201px;
  height: 205px;
  border-radius: 10%;
  z-index: 2;

  @media only screen and (max-width: 380px) {
    width: 120px;
    height: 190px;
       }

`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color:var(--icon);
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
       
      </Info>
    </Container>
  );
};

export default Product;
