import React from "react";
import Style from "./form.module.css";
import { useParams } from "react-router-dom";
import { jobOpenings } from "../../Data/Data";

const Form = () => {
  const { id } = useParams();
  const jobType = jobOpenings[id-1].title;
  
  return (
    <div className={Style.Form}>
      <form>
        <label htmlFor="jobRoll">Job Roll*</label>
        <input disabled type="text" id="jobRoll" name="jobRoll" defaultValue={jobType} required />

        <label htmlFor="fullName">Full Name*</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone*</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="cv">Upload CV (PDF or DOCX)*</label>
        <input type="file" id="cv" name="cv" accept=".pdf,.docx" required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};
export default Form;
