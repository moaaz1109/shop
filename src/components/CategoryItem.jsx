import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  
@media only screen and (max-width: 380px) {
  width:100%;
  position:relative;
  height: 50vh;
  font-size:6px;
  margin-right:30px;

}

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10%;

  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 90%;
    border-radius: 1%;
 
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 380px) {
    position: absolute;
    margin-top: 70px;
    margin-left: 12px;
    width: 60%;
    height: 50%;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
    color:yellow;
    margin-bottom: 20px;
    background-color:var(--bl)
    @media only screen and (max-width: 380px) {
      
    margin-bottom: 10px;
    background-color:var(--bl)
    }
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    
    cursor: pointer;
    font-weight: bold;
    @media only screen and (max-width: 380px) {
      display:column;
    }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Cilck to Buy</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
