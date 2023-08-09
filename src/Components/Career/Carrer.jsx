import React from "react";
import Style from "./career.module.css";
import { jobOpenings } from "../../Data/Data";
import { Link, useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const hanldleApply = (id) => {
    navigate(`/form/${id}`);
  };

  return (
    <>
      <div className={Style.career}>
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
          <h3 className={Style.excitedText}>
            <span className={Style.animation}>WE'RE HIRING!</span>
          </h3>
          <h1>Current Openings</h1>
          <div className={Style.jobBox}>
            {jobOpenings.map((job, index) => (
              <div className={Style.vacancy} key={job.id}>
                <div className={Style.jobTitle}>{job.title}</div>
                <div className={Style.jobType}>{job.position}</div>
                <hr />
                <div className={Style.jobRequirement}>
                  <ul>
                    {job.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <div className={Style.buttonContainer}>
                    <button
                      className={Style.applyButton}
                      onClick={() => hanldleApply(job.id)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>
            “If you are excited about the prospect of building awesome tech and
            robots, we’d love to hear from you”. Please email us at{" "}
            <Link to="mailto:hr@getpeppermint.co">hr@getpeppermint.co</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
