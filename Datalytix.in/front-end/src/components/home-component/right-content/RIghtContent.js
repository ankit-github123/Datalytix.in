import React from "react";
import "../../../assets/styles/home-styles/left_content.scss";
import ScrollAnimation from "react-animate-on-scroll";
const RightContent = (props) => {
  return (
    <div className=" padd_left_content">
      <div className="row">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div>
          
              <img
                className={props.code ? "bank" : null}
                style={{ paddingTop: "50px" }}
                src={props.data.pic}
                alt="1st"
              />
            
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="right_pane_head">
           
              <h2 className="right_pane_head_h2" style={{ paddingTop: "50px" }}>
                {props.data.header}
              </h2>
              <h2 className="right_mid_h2" style={{ paddingTop: "5px" }}>
                {props.data.mid}
              </h2>
           
          </div>
          
            <div className="right_pane_text">
              <div style={{ paddingTop: "5px" }}>{props.data.text1}</div>
              <div style={{ paddingTop: "5px" }}>{props.data.text}</div>
            </div>
          
        </div>
        <div className="col-lg-1 col-md-1"></div>
      </div>
    </div>
  );
};
export default RightContent;
