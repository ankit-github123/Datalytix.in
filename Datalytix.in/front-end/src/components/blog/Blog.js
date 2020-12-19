
import React from "react";
import pic1 from "../../assets/images/extra-constructs/3819454.jpg"
const Blog = () => {
    return <div>
        <div className="fixed_header_margintop" style={{width:"62vh",margin: "10% 36% 9%"}}>
            <img src={pic1} alt="under construction"/>
        </div>
        <div style={{position: "relative",  bottom: "120px"}}>
            <h3 style={{display: "flex",justifyContent: "center",color: "gray"}}>Webpage Under Construction.</h3>
        </div>
    </div>


}
export default Blog;