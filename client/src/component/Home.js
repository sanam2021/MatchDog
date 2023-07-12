import React from "react";
import styled from "styled-components";
import Testimonials from "./Testimonials";
import FeaturesSection from "./FeaturesSection";
import CtaSection from "./CtaSection";
import TitleSection from "./TitleSection";
import Footer from "./Footer";
import LocationPage from "./LocationPage";


const Home = () => {


  return (
    <HomeContainer>
      <TitleSection />
      <FeaturesSection />
      <Testimonials />
      <CtaSection />
      <LocationPage />
      <Footer />
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  padding-bottom: 150px;
`;

export default Home;
