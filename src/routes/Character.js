import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Comic from "../Components/Comic";
import Loading from "../Components/Loading";

const TITLE_FIX_Y = 20;

const Back = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff3939;
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1;
`;

const BackImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  object-fit: cover;

  filter: blur(16px);

  width: 100%;
  height: 100%;
  transform: scale(1.05);
  position: fixed;
  top: 0;
  left: 0;

  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 2000px;
  padding-bottom: 60px;
`;

const ImgContainer = styled.div`
  width: 500px;
  min-height: 700px;
  height: 700px;
  margin-top: 50px;
  background-color: #ededed2e;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 12px 7px 20px 0px #00000099;
`;
const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 48px;
  margin-bottom: ${TITLE_FIX_Y}px;
  color: white;
  font-size: 46px;
  font-style: italic;
  text-shadow: 4px 2px 2px black;
  position: sticky;
  top: 20px;
  transition: all 0.3s ease-in-out;
  padding: 16px 0;
  text-align: center;
  border-radius: 20px;
  &.bgDark {
    background-color: #202020db;
    padding: 16px 28px;
    transform: scale(1.1);
  }
`;

const Desc = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  width: 60%;
  color: white;
  font-size: 24px;
  font-style: italic;
  text-shadow: 1px 1px 6px black;
`;

const More = styled.a.attrs((props) => ({
  href: props.link,
  target: "_blank",
}))`
  width: 260px;
  height: 70px;
  margin-top: 40px;
  background-color: #ffffff91;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin-bottom: 60px;
  box-shadow: 12px 7px 20px 0px #00000099;
`;

const ComicList = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const titleRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const getDetail = async () => {
    const data = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const json = await data.json();
    if (json.code === 200) {
      setData(json.data.results[0]);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current) return;
      setIsScrolled(
        titleRef.current.getBoundingClientRect().top <= TITLE_FIX_Y
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    getDetail();
  }, [id]);

  let urls = data?.urls.filter((url) => url.type === "comiclink");

  return data === null ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Link to="/">
        <Back />
      </Link>
      <BackImg src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
      <Container src={`${data.thumbnail.path}.${data.thumbnail.extension}`}>
        <ImgContainer>
          <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
        </ImgContainer>
        <Title
          ref={titleRef}
          className={isScrolled ? "bgDark" : ""}
        >
          {data.name}
        </Title>
        <Desc>{data.description}</Desc>
        <ComicList>
          {data.comics?.items?.map((item, i) => (
            <Comic
              key={i}
              name={item.name}
            />
          ))}
        </ComicList>
        {urls ? <More link={urls[0].url}>{"More ->"}</More> : null}
      </Container>
    </React.Fragment>
  );
};

export default Detail;
