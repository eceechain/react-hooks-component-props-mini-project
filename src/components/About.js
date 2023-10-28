import React from "react";

function About({ image, alt,about }) {
  const blogimage = image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={blogimage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;