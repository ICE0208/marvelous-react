import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import HeroList from "../components/HeroList";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #900001;
  min-height: 100vh;
  padding: 80px;
  padding-top: 0px;
  box-sizing: border-box;
`;
const HomeTitle = styled.div`
  width: 100%;
  height: 100px;
  color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 58px;
  font-weight: bold;
  margin: 30px;
  padding-bottom: 26px;
  margin-bottom: 50px;
  border-bottom: 2px solid #f3f3f3;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 50px 70px;
  margin: auto; // Add this line to center the container
  width: 100%;
  max-width: 1800px;
  padding: 10px 30px;
  box-sizing: border-box;
`;

const Home = () => {
  const [datas, setData] = useState(null);

  const getHero = async () => {
    const data = await fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );
    const json = await data.json();

    if (json.code === 200) {
      setData(json.data.results);
    }
  };

  useEffect(() => {
    getHero();
  }, []);
  return (
    <Container>
      {datas === null ? (
        <Loading />
      ) : (
        <React.Fragment>
          <HomeTitle>Marvel Characters</HomeTitle>
          <GridContainer>
            <HeroList datas={datas} />
          </GridContainer>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Home;
