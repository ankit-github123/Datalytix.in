import React from "react";
import "../../../assets/styles/home-styles/left_content.scss";
import ScrollAnimation from "react-animate-on-scroll";
const LeftContent = (props) => {
  return (
    <div className=" padd_left_content">
   
      <div className="row">
      <div  className="col-lg-1 col-md-1" >

      </div>
        <div className="col-lg-6 col-md-6 ">
        <div className="left_pane_head">
      
            <h2 className="left_pane_head_h2" style={{paddingTop:"50px"}}>{props.data.header}</h2>
            <h2 className="mid_h2" style={{paddingTop:"5px"}}>{props.data.mid}</h2>
            

          </div>
          
          <div className="left_pane_text">
          <div style={{paddingTop:"5px"}}>{props.data.text1}</div><div style={{paddingTop:"5px"}}>{props.data.text}</div>
          </div>
          
        </div>
        
        <div className="col-lg-4 col-md-4">
            <div>
            
                <img style={{paddingTop:"50px"}} src={props.data.pic} alt="1st"/>
                
            </div>
        </div>
        <div className="col-lg-1 col-md-1">

        </div>
        
      </div>
     
    </div>
  );
};
export default LeftContent;
