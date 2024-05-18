import React from "react";
import "./home.css"
import Header from "../../components/header/Header";
import Story from "../../components/storyy/Story";
import Team from "../../components/team/Team";
import About from "../../components/aboutus/About";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <About />
            <Story />
            <Team />
            <Footer />
        </>
    )
}

export default Home;