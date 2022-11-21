import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import PopularTest from "../components/PopularTest/PopularTest";
import PopularHealthPackage from "../components/PopularHealth/PopularHealthPackage";
import TopBookedTests from "../components/TopBookedTests/TopBookedTests";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <PopularTest />
      <div style={{ background: "#d8d9cf" }}>
        <PopularHealthPackage />
      </div>
      <TopBookedTests />
    </>
  );
}
