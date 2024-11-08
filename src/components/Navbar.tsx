// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
      </div>
    </nav>
  );
}
