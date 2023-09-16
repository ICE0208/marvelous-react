import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #900001;
`;

const circleAnimation = keyframes`
    0%{
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(250deg);
    }
    100%{
        transform: rotateY(360deg);
    }
`;
const Text = styled.h1`
  color: #f3f3f3;
  font-size: 80px;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  animation: ${circleAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <Container>
      <Circle />
      <Text>Loading...</Text>
    </Container>
  );
};

export default Loading;
