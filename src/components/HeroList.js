import Hero from "./Hero";

// 이미지가 존재하는지 확인합니다.
const isImagePresent = (data) => {
  const pathData = data.thumbnail.path.split("/");
  if (pathData[pathData.length - 1] === "image_not_available") {
    return false;
  }
  return true;
};

const EXCEPTION_DATA_NAMES = ["Gorilla Man"];
// 예외 데이터인지 확인합니다.
const isDataExceptional = (data) => {
  for (const EXCEPTION_DATA_NAME of EXCEPTION_DATA_NAMES) {
    if (data.name === EXCEPTION_DATA_NAME) return true;
  }
  return false;
};

const HeroList = ({ datas }) => {
  return datas.map((data) => {
    if (isImagePresent(data) === false) return;
    if (isDataExceptional(data) === true) return;

    return (
      <Hero
        key={data.id}
        data={data}
        name={data.name}
        id={data.id}
        imgURL={`${`${data.thumbnail.path}.${data.thumbnail.extension}`}`}
        comicsAvail={data.comics.available}
      />
    );
  });
};
export default HeroList;
