import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {brand} from "./ChartInfo";
import { Link } from "react-router-dom";
// Import our demo components
import Chart from "./chart-components/Brands";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    type: "column"
  },
  title: {
    text: "Top 10 Brands across genre for Ad insertion"
  },

  xAxis: {
    title: {
      text: "Brand"
    },
    categories: [
      "Dettol Antiseptic",
      "Dettol Soaps",
      "Lizol",
      "Head and Shoulders",
      "Sprite",
      "Lux Toilet Soap",
      "Close up ever fresh",
      "Veet Hair removal",
      "Clinic Plus Shampoo",
      "Dettol Disinfectant Spray"
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: "Weekly Insertions"
    },
    labels: {
      enabled: false
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y} k</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "<span>{point.y} k</span>",
        crop: false,
        overflow: "none"
      }
    }
  },
  series: [
    {
      name: "Weekly Insertions",
      data: [31.2, 21.5, 19.8, 12.2, 11.5, 11.2, 11, 10.9, 10.9, 10.7],
      showInLegend: false,
      color: "#f7a35c"
    }
  ]
};

// Render app with demo chart
const BrandMain = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
    return <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem",padding: "30px 0 57px"}}>
    <div className="res_title">
        <h3>
          We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
          NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
        <div>
        <Chart options={chartOptions} highcharts={Highcharts} />

        </div>
        
 
          <div className="social_button_div">
          <Link to="/insight/statistics/advertising_chart2"><img src={left} alt="right_button"/></Link>
          <Link to="/insight/statistics/advertising_chart4"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
         </div>
        
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className="right_chart_info">
        <div className="bind_div_com">
          <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{brand.date}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{brand.region}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{brand.time}</span>
        </div>
        <div className="bind_div_com">
          <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{brand.Notes}</span>
        </div>
          <div className="right_restaurant">
            <h3 className="try_it_text">
              Would You like to get in the world of possibilities and get unique
              data led insights for your business
            </h3>
            <div>
            </div>
              <Link to="/demo"><button className="try_us_button"><span>TRY US</span> - <span style={{textTransform:"capitalize",fontWeight:"400"}}>It's Free</span></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  

}
export default BrandMain;