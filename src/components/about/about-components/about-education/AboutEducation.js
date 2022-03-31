import React from "react";
import style from "./AboutEducation.module.css";
import education from "../../../../images/education.PNG";

function AboutEducation() {
  return (
    <div className={style.info}>
      <div className={style.school_grid}>
        <div>
          <p className={style.level}>College (2018 – Present)</p>
          <div className={style.level__info}>
            <p>FEU Institute of Technology</p>
            <p>839 P. Paredes, Sampaloc, Manila, 1015 Metro Manila, Philippines</p>
          </div>
        </div>
        
        <div>
          <p className={style.level}>Senior High School (2016 – 2018)</p>
          <div className={style.level__info}>
            <p>Technological University Of The Philippines, Manila</p>
            <p>Ayala Blvd. San Marcelino Street, Ermita Manila, Philippines</p>
          </div>
        </div>
        
        <div>
          <p className={style.level}>Junior High School (2012 – 2016)</p>
          <div className={style.level__info}>
            <p>Bangkal High School</p>
            <p>Gen. Malvar cor. Apolinario Street, Bangkal, Makati City, Philippines</p>
          </div>
        </div>
        
        <div>
          <p className={style.level}>Elementary School (2006 – 2012)</p>
          <div className={style.level__info}>
            <p>Bangkal Elementary School</p>
            <p>Gen. Malvar Street, Bangkal, Makati City, Philippines</p>
          </div>
        </div>
      </div>
      <img src={education} alt="education" />
    </div>
  );
}

export default AboutEducation;
