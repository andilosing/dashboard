import React from "react";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";

function Topbar({ onToggleClick }) {
  return (
    <div className="topbar">
      <div className="toggle" onClick={onToggleClick}>
        <IonIcon icon={menuOutline} />
      </div>
      <div className="user">AL</div>
    </div>
  );
}

export default Topbar;
