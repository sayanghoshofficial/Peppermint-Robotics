import React from "react";
import Style from "./footer.module.css";
import logo from "../Assets/Icons/Untitled-design-86-1.png";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { Link } from "react-router-dom";
import { quickLink, recentPost } from "../../Data/Data";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={Style.footerMain}>
      <div className={Style.top}>
        <div className={Style.left}>
          <div className={Style.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={Style.contact}>
            <div className={Style.description}>
              <p>Aubotz Labs Pvt Ltd</p>
              <p>CIN: U29100MH2019PTC324975</p>
            </div>
            <div className={Style.contactInfo}>
              <div className={Style.contactAddress}>
                <div>
                  <ImLocation2 color="#00f0ef" />
                </div>

                <p id="details">
                  Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji
                  Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021
                </p>
              </div>
              <div className={Style.contactEmail}>
                <div>
                  <AiOutlineMail color="#00f0ef" />
                </div>

                <p id="details">
                  <Link to="mailto:info@getpeppermint.co">
                    info@getpeppermint.co
                  </Link>
                </p>
              </div>
              <div className={Style.contactPhone}>
                <div>
                  <CgPhone color="#00f0ef" />
                </div>
                <p id="details">+91 89567 10044</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.middle}>
          <h1>Quick Links</h1>
          <ul>
            {quickLink.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div className={Style.right}>
          <h1>Recent Posts</h1>
          <ul>
            {recentPost.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className={Style.bottom}>
        <div className={Style.bottomLeft}>
          getpeppermint © 2023. All rights reserved.
        </div>
        <div className={Style.bottomRight}>
          <ul>
            <li>
              <Link to="https://twitter.com/getpeppermint" target="_blank">
                <BsTwitter />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/getpeppermint"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw"
                target="_blank"
              >
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
    </div>
  );
};

export default Footer;
