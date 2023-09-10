import styled from "styled-components";

const Container = styled.div`
  background-color: #900001;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BigText = styled.div`
  color: #f3f3f3;
  font-size: 200px;
`;
const SmallText = styled.div`
  color: #f3f3f3;
  font-size: 30px;
`;

const NotFound = () => {
  return (
    <Container>
      <ColBox>
        <BigText>404</BigText>
        <SmallText>Can't Find this ID's Character.</SmallText>
      </ColBox>
    </Container>
  );
};

export default NotFound;
