import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import DataSource from "../../../common-components/datasource-component/DataSource"
import Contact from "../../../common-components/contact-component/Contact"

export default function RetailComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div className="fixed_header_margintop">
        <Banner/>
        <Category/>
        <CardData/>
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}