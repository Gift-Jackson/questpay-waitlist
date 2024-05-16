import Hero from "../components/Home/Hero";
import PageTransition from "../components/transition/PageTransition";

const Home = () => {
  return (
    <>
      <PageTransition>
        <Hero />
      </PageTransition>
    </>
  );
};

export default Home;
