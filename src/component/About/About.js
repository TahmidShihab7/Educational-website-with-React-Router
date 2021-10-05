import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="container mt-5  ">
      <h1 className="text-center mb-5 pb-3 about-us-heading">WHY CHOOSE US</h1>
      <div className="row align-items-center px-5">
        <div className="col-lg-6">
          <br />

          <h2>
            25+ Years of Experience in{" "}
            <span className="text-primary">Human Resource Management</span>
          </h2>
          <p>
            Reobiz donec pulvinar magna id leoersi pellentesque impered
            dignissim rhoncus euismod euismod eros vitae.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <h2>Extensive Employment</h2>
              <p>
                Quisque placerat vitae lacus ut sceleris queusce luctus odio ac
                nibh luctus, in porttitor.
              </p>
            </div>
            <div className="col-lg-6">
              <h2>Working Placeholders</h2>
              <p>
                Quisque placerat vitae lacus ut sceleris queusce luctus odio ac
                nibh luctus, in porttitor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="about-us-img"
            src="img/right-img.102c17b8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
