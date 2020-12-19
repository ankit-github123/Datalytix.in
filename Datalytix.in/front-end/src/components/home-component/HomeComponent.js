// Home components goes in this folder..
import React from "react";
import About from "./about-dataAnalytics/About"
import Content from "../home-component/content/Content";
import Animation from "../home-component/animation/AnimationImg";
import Solution from "../home-component/OurSolution/Solution";
import Technology from "../home-component/technology/Technology";
import LeftContent from "./left-content/LeftContent";
import RightContent from "./right-content/RIghtContent"
import Estimate from "./estimate/Card";
import Description from "./data-analytics-description/Description";
import Contact from "../../common-components/contact-component/Contact"
import {LeftContent1} from "../home-component/Sectiondata";
import {LeftContent2} from "../home-component/Sectiondata";
import {RightContent1} from "../home-component/Sectiondata";
import {RightContent2} from "../home-component/Sectiondata";

export default function HomeComponent() {
  return (
    <div style={{fontFamily:"Poppins"}}>
      <Content />
      <Description/>
      {/* <About/> */}
      {/* <Animation /> */}
      {/* <Solution /> */}
      <LeftContent data={LeftContent1}/>
      {/* <Technology /> */}
      <RightContent data={RightContent1} code={false}/>
      <LeftContent data={LeftContent2}/>
      <RightContent data={RightContent2} code={true}/>
      
      <Estimate />
      <Contact link={"https://us7.list-manage.com/contact-form?u=c45b4435fa81fc45d23ed7254&form_id=6313ebab993ba9105ee068628885d91f"}/>
    </div>
  );
}
