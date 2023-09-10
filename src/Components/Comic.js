import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 60px;
  background-color: #ffffff91;
  border-radius: 40px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 12px 7px 20px 0px #00000099;
`;

const Text = styled.h3`
  font-size: 20px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
`;

const Comic = ({ name }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};

export default Comic;
