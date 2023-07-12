import React from "react";
import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import TestimonialsSection from "./component/TestimonialsSection";
import Testimonials from "./component/Testimonials";
import CtaSection from "./component/CtaSection";
import GlobalStyles from "./component/GlobalStyles";
// import SignUpPage from "./component/SignUpPage";
import ContactPage from "./component/ContactPage";
import TestimonialsSection1 from "./component/TestimonialsSection1";
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogoutButton";
import ChatBox from "./component/ChatBox";
import Match from "./component/match/Match";
import Match1 from "./component/match/Match1";
import DogProfile from "./component/DogProfile";
import MyDog from "./component/MyDog";
import DogDetails from "./component/DogDetails";
import MyDogs from "./component/MyDogs";





const App = () => {

const [ setIsMatchClicked] = useState(false);

const handleMatchClick = () => {
  setIsMatchClicked(true);
};

  return (
    <>
      <Router>
        <NavBar handleMatchClick={handleMatchClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route
            path="/testimonialsSection"
            element={<TestimonialsSection />}
          />
          <Route
            path="/testimonialsSection1"
            element={<TestimonialsSection1 />}
          />
          <Route path="/testimonials/:id" element={<Testimonials />} />
          {/* <Route path="/location" element={<LocationPage />} /> */}
          <Route path="/cta" element={<CtaSection />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/loginout" element={<LogoutButton />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/dogprofile" element={<DogProfile />} />
          <Route path="/match" element={<Match />} />
          <Route path="/match1" element={<Match1 />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/my-dog" element={<MyDog />} />
          <Route path="/my-dogs" element={<MyDogs />} />
          <Route path="/my-dogs/:dogId" element={<DogDetails />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
};

export default App;


