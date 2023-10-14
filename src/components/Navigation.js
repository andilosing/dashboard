import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  logoApple, 
  homeOutline, 
  personOutline, 
  chatbubbleOutline, 
  helpOutline, 
  settingsOutline, 
  lockClosedOutline, 
  logOutOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Navigation({onNavClick, isActive }) {
  

  const menuItems = [
    { icon: logoApple, title: "Real Estate Dashboard", link: "/" },
    { icon: homeOutline, title: "Dashboard", link: "/zinseszinsrechner" },
    { icon: personOutline, title: "Customers", link: "/customers" },
    { icon: chatbubbleOutline, title: "Message", link: "/message" },
    { icon: helpOutline, title: "Help", link: "/help" },
    { icon: settingsOutline, title: "Settings", link: "/settings" },
    { icon: lockClosedOutline, title: "Profile", link: "/profile" },
    { icon: logOutOutline, title: "Logout", link: "/logout" },
  ];

  const defaultClickedIndex = menuItems.findIndex(item => item.title === "Dashboard");
  const [clickedIndex, setClickedIndex] = useState(defaultClickedIndex);

  return (
    <nav className={`navigation ${isActive ? 'active' : ''}`}>
      <ul>
        {menuItems.map(({ icon, title, link }, index) => (
          <li 
            key={index} 
            className={clickedIndex === index ? "clicked" : ""}
            onClick={() => {
              onNavClick();
              setClickedIndex(index);
            }}>
            <Link to={link}>
              <span className="icon">
                <IonIcon icon={icon} />
              </span>
              <span className="title">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
