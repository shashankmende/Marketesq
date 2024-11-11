import "./Home.css";
import Discover from "../Discover/Discover";
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import Hero from '../Hero/Hero';
import Services from "../Services/Services";
// import {BrowserRouter} from 'react'
import Hero from "../Hero/Hero";

function Home() {
  return (
    <>
      <main>
        <Hero />

        <Discover />
        <Services />
      </main>
    </>
  );
}

export default Home;
