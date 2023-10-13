import React from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";

function Card() {
  return (
    <div className="card">
      <div>
        <div className="numbers">1,432</div>
        <div className="cardName">Daily Views</div>
      </div>
      <div className="iconBox">
        <IonIcon icon={eyeOutline} />
      </div>
    </div>
  );
}

export default Card;
