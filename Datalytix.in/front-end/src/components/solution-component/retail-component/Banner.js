import React from "react";
import Button from "../../../building-blocks/atoms/Button/Button";
import { Link } from "react-router-dom";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import main from "../../../assets/images/solution-assests/rti-assests/banner.png";
import Capture from "../../../assets/images/common-assets/Capture.png"
import { mainBannerData } from "./Mock";
export default function Banner() {
  return (
    <div className=" main_bannerComponent">
      <div className="row">
      <div className="col-lg-1 col-md-1">

      </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-12 main_banner_data" style={{fontFamily:"Poppins"}}>
          {mainBannerData.map((item, i) => {
            return (
              <div>
                <div className="top_heading_wrap">
                <div style={{fontSize:"21px"}}>{item.heading}</div>
                <div class="image"><img src={Capture} alt="capture" /></div>
                </div>
                <div className="banner_data_wrap">
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
                <div><Link to="/demo"><button style={{borderRadius:"4px"}} className="demo-but">TRY US -<span className="try_us_buttn"> Its free</span></button></Link></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-12 main_banner_img">
          <div>
            <img style={{width: "30rem", paddingLeft: "118px"}} src={main} alt="main" />
          </div>
        </div>
        <div className="col-lg-1 col-md-1"></div>
      </div>
    </div>
  );
}
