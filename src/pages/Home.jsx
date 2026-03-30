import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../section/About";
import Contract from "../section/Contract";
import Core from "../section/Core";
import Engagements from "../section/Engagements";
import Experience from "../section/Experience";
import Hero from "../section/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Core />
      <Engagements />
      <Experience />
      <Contract />
      <Footer />
    </>
  );
}

export default Home;
