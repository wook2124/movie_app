import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “나는 신발이 없음을 한탄했는데, 길에서 발이 없는 사람을 만났다.”
      </span>
      <span>− 데일 카네기</span>
    </div>
  );
}

export default About;
