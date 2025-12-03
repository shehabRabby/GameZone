import ShowSlider from "../Components/ShowSlider";
import NewsLetter from "../Components/NewsLetter";
import GameContainer from "../Components/GameContainer";
import { useLoaderData, useParams } from "react-router";
import ExclusiveOfferBanner from "../Components/ExclusiveOfferBanner";

const HomePage = () => {
  const allData = useLoaderData();
  return (
    <div className="min-h-[332px]">
      <ShowSlider></ShowSlider>
      <GameContainer allData ={allData}></GameContainer>
      <ExclusiveOfferBanner></ExclusiveOfferBanner>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
