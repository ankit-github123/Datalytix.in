import React,{useState} from "react";
import ReactRoate from "react-rotating-text";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Animation from "../animation/AnimationImg"
import "./content.css"

const Content = () => {
  const [open, setopen] = useState(false);
  const onOpenModal = (str) => {

    setopen(true);
    
  };
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const onCloseModal = () => {
    setopen(false);
  };
  return (
    <div className="content">
      <div className="row media_content">
      <Modal open={open} onClose={onCloseModal}>
          <h2 className="topic">{"Datalytix"}</h2>
        </Modal>
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="title-edge">
                <div className="title-content">Capturing <span>AI Insights</span> using <span>Alternative Data</span></div>
                <div className="typewriter">
                The easiest, economical, and most comprehensive way to deliver intelligence for your business decisions
                </div>
                <div className="demo-btn-div">
                
                    <button style={{borderRadius:"4px"}} className="demo-but">TRY US -<span className="try_us_buttn"> Its free</span></button>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-4 col-12">
            <div>
                <Animation/>
            </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
      </div>
    </div>
  );
};

export default Content;