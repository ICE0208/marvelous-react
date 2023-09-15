import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const ImgContainer = styled.div`
  height: 100%;
  background-color: #ededed2e;
  overflow: hidden;
  flex: 1.6;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  height: 100%;
  background-color: #f3f3f3;
  overflow: hidden;
  box-sizing: border-box;
  padding: 30px 26px;
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const Text = styled.h3`
  margin: 0 0;
`;
const Name = styled(Text)`
  font-size: 36px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Info = styled(Text)`
  font-size: 22px;
`;

const Hero = ({ id, name, imgURL, comicsAvail }) => {
  return (
    <StyledLink to={`/character/${id}`}>
      <Container>
        <ImgContainer>
          <Img src={imgURL} />
        </ImgContainer>
        <TextContainer>
          <Name>{name}</Name>
          <Info>Available Comics : {Number(comicsAvail).toLocaleString()}</Info>
        </TextContainer>
      </Container>
    </StyledLink>
  );
};

export default Hero;
