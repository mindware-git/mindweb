// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Nav() {
  const [showSubcategories, setShowSubcategories] = useState(false);

  const toggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <NavLink to="/" className="hover:underline">
          홈
        </NavLink>
        <div>
          <button onClick={toggleSubcategories} className="hover:underline">
            제품
          </button>
          {showSubcategories && (
            <div className="flex flex-col space-y-2 mt-2">
              <NavLink to="/app" className="hover:underline">
                직장인 서비스
              </NavLink>
              <NavLink to="/enterprise-service" className="hover:underline">
                기업용 서비스
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/aboutus" className="hover:underline">
          Unione 소개
        </NavLink>
      </div>
    </nav>
  );
}
