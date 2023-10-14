import React from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, menuOutline } from "ionicons/icons";

function Topbar({ onToggleClick }) {
  return (
    <div className="topbar">
      <div className="toggle" onClick={onToggleClick}>
        <IonIcon icon={menuOutline} />
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <IonIcon className="icon" icon={searchOutline} />
           
        </label>
      </div>
      <div className="user">AL</div>
    </div>
  );
}

export default Topbar;
