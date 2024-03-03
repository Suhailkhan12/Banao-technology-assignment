import Hero from "../features/HeroSection/Hero";
import Leftaside from "../features/Leftaside/Leftaside";
import Rightaside from "../features/Rightaside/Rightaside";
import Filter from "../features/filter/Filter";

function Home({ resumeData }) {
  return (
    <>
      <Hero />
      <Filter />
      <Leftaside />
      <Rightaside />
    </>
  );
}

export default Home;
