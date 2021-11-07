import React from "react";
import Layout from "../Layout/Layout";
import image from "./contact-us-concept-landing-page_52683-12860.jpg";
import './About.css';

const About = () => {
  return (
    <Layout>
      <br /> <br />
      {/* Taking two Rows and Adding the About Section */}
      <h2>About Us</h2>
      <div className="about my-5 p-3">
        <div className="aboutFirst">
          <p>
            Reviews, press mentions, or user-generated content can be included
            on your About Us page to share how you’re impacting your customers
            or your industry. There are a variety of ways to integrate social
            proof into your About Us page, from embedding Instagram galleries of
            customer content to featuring the logos of publications that have
            covered you, to highlighting a quote you lifted from a customer
            review. Press mentions, awards, and other wins are common examples
            of milestones that can be used to help tell the middle of your
            story.
          </p>
        </div>
        <div className="aboutSecond">
          <img src={image} alt="" srcset="" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
