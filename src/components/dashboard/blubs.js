import { Link } from "react-router-dom";
import React from "react";
export default function Blubs() {
  const blubs = [
    { title: "Dashboard", link: "/" },
    { title: "Viewer", link: "/viewer" },
    { title: "Edit/Config", link: "/config" },
    { title: "Maps", link: "/maps" },
    { title: "Reports", link: "/reports" },
    { title: "Schedule", link: "/schedule" },
    { title: "Profile", link: "/profile" },
  ];
  return (
    <div className="cards">
      {blubs &&
        blubs.map((item) => {
          return (
            <div>
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
