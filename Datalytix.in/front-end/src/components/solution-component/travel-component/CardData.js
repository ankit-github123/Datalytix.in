import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { cardData } from "./Mock";
export default function CardData() {
  return (
    <div  style={{background:"#F9FAF5"}}>
    <div className="container card_container">
      <div class="card-groups vgr-cards">
        {cardData.map((item, i) => {
          return (
            <div class="card"  style={{background:"#F9FAF5"}}>
              <div class="card-img-body" >
                <img class="card-img" src={item.img} alt="Cardimage cap" />
              </div>
              <div class="card-body">
                <div className="carddata_content" >
                  <div>{item.title}</div>
                  <div>{item.data}</div>
                  <div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
