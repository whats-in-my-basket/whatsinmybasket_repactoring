import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function HeaderModeToggle() {
  const [white, setWhite] = useState<boolean>();

  const changeMode = () => {
    if (localStorage.getItem("theme") === "white") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setWhite(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "white");
      setWhite(true);
    }
  };

  return (
    <div className="header-mode-toggle" onClick={changeMode}>
      {white ? (
        <FaRegMoon className="header-mode-toggle-btn" />
      ) : (
        <FiSun className="header-mode-toggle-btn" />
      )}
    </div>
  );
}
