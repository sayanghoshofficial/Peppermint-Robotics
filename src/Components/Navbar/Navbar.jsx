import React, { useState } from "react";
import Styles from "./navbar.module.css";
import Menu from "../Assets/Icons/menu.png";
import Cross from "../Assets/Icons/close.png";
import Logo from "../Assets/Icons/Untitled-design-86-1.png";
import { Link } from "react-router-dom";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import {MdEmail} from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.navbar}>
        <div className={Styles.logo}>
          <img alt="logo" src={Logo} />
        </div>
        <ul className={Styles.link}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
          <li>
            <Link to="/">SOLUTIONS</Link>
          </li>
          <li>
            <Link to="/">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/">RESOURCES</Link>
          </li>
          <li>
            <Link to="/carrer">CARRER</Link>
          </li>
        </ul>
        <div className={Styles.toggleBtn}>
          <img alt="menu" src={menu ? Menu : Cross} onClick={toggleMenu} />
        </div>
        <div className={Styles.social}>
          <ul>
            <li>
              <Link to="https://twitter.com/getpeppermint" target="_blank">
                <BsTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/getpeppermint" target="_blank">
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw" target="_blank">
                <BsYoutube />
              </Link>
            </li>
            <li>
              <Link to="mailto:info@getpeppermint.co" target="_blank">
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      <div
        style={menu ? { display: "none" } : null}
        className={Styles.dropDownMenu}
      >
        <li>
          <Link to="/"><b>HOME</b></Link>
        </li>
        <li>
          <Link to="/"><b>ABOUT US</b></Link>
        </li>
        <li>
          <Link to="/"><b>SOLUTIONS</b></Link>
        </li>
        <li>
          <Link to="/"><b>PRODUCTS</b></Link>
        </li>
        <li>
          <Link to="/"><b>RESOURCES</b></Link>
        </li>
        <li>
          <Link to="/carrer"><b>CARRER</b></Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
