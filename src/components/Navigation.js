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

function Navigation({ isActive }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    { icon: logoApple, title: "Real Estate Dashboard", link: "/" },
    { icon: homeOutline, title: "Dashboard", link: "/dashboard" },
    { icon: personOutline, title: "Customers", link: "/customers" },
    { icon: chatbubbleOutline, title: "Message", link: "/message" },
    { icon: helpOutline, title: "Help", link: "/help" },
    { icon: settingsOutline, title: "Settings", link: "/settings" },
    { icon: lockClosedOutline, title: "Profile", link: "/profile" },
    { icon: logOutOutline, title: "Logout", link: "/logout" },
  ];

  return (
    <nav className={`navigation ${isActive ? 'active' : ''}`}>
      <ul>
        {menuItems.map(({ icon, title, link }, index) => (
          <li 
            key={index} 
            onMouseOver={() => setHoveredIndex(index)}
            className={hoveredIndex === index ? "hovered" : ""}
          >
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
