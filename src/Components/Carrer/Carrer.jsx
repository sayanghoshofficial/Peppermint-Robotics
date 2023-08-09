import React from "react";
import Navbar from "../Navbar/Navbar";
import Style from "./carrer.module.css";

const Carrer = () => {
  return (
    <>
      <div className={Style.carrer}>
        <header>
          <center>
            <h1>Careers</h1>
          </center>
        </header>
        <div className={Style.about}>
          <h1>About Peppermint</h1>
          <p>
            Peppermint is an award-winning robotics company, supported by SINE
            IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial
            and Enterprise robots and platforms for mobility-led services. The
            Engineering team has 50+ years of experience in building deep-tech
            and robotics products. Robots built on the Peppermint Platform are
            deployed across 13 cities in 4 countries!
          </p>
          <hr />
        </div>
        <div className={Style.hiringBox}>
          <h3>WE'RE HIRING!</h3>
          <h1>Current Openings</h1>
          <div className={Style.jobBox}>
            <div className={Style.vacancy}>
              <div className={Style.jobTitle}>SDE II</div>
              <div className={Style.jobType}>
                Software Development Engineer II
              </div>
              <hr />
              <div className={Style.jobRequirement}>
                <ul>
                  <li>Python, API, MongoDB.</li>
                  <li>Dockers, Flutter.</li>
                  <li>Mobile/Web App Development</li>
                </ul>
              </div>
            </div>
            <div className={Style.vacancy}>
              <div className={Style.jobTitle}>SDE II</div>
              <div className={Style.jobType}>
                Software Development Engineer II
              </div>
              <hr />
              <div className={Style.jobRequirement}>
                <ul>
                  <li>Python, API, MongoDB.</li>
                  <li>Dockers, Flutter.</li>
                  <li>Mobile/Web App Development</li>
                </ul>
              </div>
            </div>
            <div className={Style.vacancy}>
              <div className={Style.jobTitle}>SDE II</div>
              <div className={Style.jobType}>
                Software Development Engineer II
              </div>
              <hr />
              <div className={Style.jobRequirement}>
                <ul>
                  <li>Python, API, MongoDB.</li>
                  <li>Dockers, Flutter.</li>
                  <li>Mobile/Web App Development</li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            “If you are excited about the prospect of building awesome tech and
            robots, we’d love to hear from you”. Please email us at
            hr@getpeppermint.co
          </p>
        </div>
      </div>
    </>
  );
};

export default Carrer;
