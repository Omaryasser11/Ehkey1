import { useEffect } from "react";
import "./HomePage.scss";
import Section1Home from "../../Compents/HomeCompents/Section1Home";
import Section2Home from "../../Compents/HomeCompents/section2Home";
import Section3Home from "../../Compents/HomeCompents/Section3Home";
import Section4Home from "../../Compents/HomeCompents/section4Home";
import Section5Home from "../../Compents/HomeCompents/section5Home";
import Section6Home from "../../Compents/HomeCompents/section6Home";
import Section7Home from "../../Compents/HomeCompents/section7Home";
import Section1Contact from "../../Compents/ContactUsCompents/Section1Contact";
function HomePage() {

  return (
    <>
      <Section1Home />
      <Section2Home />
      <Section3Home />
      <Section7Home />
      <Section4Home />
      <Section5Home />
      <Section6Home />
      <Section1Contact />
    </>
  );
}
export default HomePage;
