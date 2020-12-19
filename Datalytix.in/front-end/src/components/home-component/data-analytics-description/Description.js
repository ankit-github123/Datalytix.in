import React from "react";
import "./description.scss";
const Description = () => {
  return (
    <div className="row description">
    <div className="col-lg-1 col-md-1">

    </div>
      <div className="col-lg-10 col-md-10 description_text">
        Datalytix is an automated 360 degree intelligence platform that enables
        key business decisions. We create <span className="highlighted_text_desc">"Alternative Information Graph"</span>
        {` `}assisted by AI technologies and signals from a mix of sources like
        social media, news/articles, locations, transaction and private
        propriety data.
      </div>
      <div className="col-lg-1 col-md-1">

    </div>
    </div>
  );
};
export default Description;
