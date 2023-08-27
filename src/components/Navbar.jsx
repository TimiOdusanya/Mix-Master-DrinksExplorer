import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import { FaInstagram, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            <FaInstagram />
          </NavLink>
          <NavLink to="/" className="nav-link">
            <FaTwitter />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
