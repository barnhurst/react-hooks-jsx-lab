import React from "react";
import image from "./data/data.js";

function About() {
  return <div>
    <h2>About Me</h2>
    <p>lorem ipsum</p>
    <img src = {image} alt="I made this" />
  </div>;
}

export default About;
