import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";
import image1 from "../../assets/images/background.png.jpg"
const About = () => {
  return (
    <>
      {/* <Jump> */}
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
               //src="c:\Downloads\WhatsApp Image 2024-04-06 at 15.44.18_903a3cc0.jpg"
                alt="profile_pic"
              /> */}
              <img src={image1} alt="profile_pic"/>
              
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <h5>
               Dedicated and Passionate Data Structures and Algorithm(DSA) enthusiast 
               with strong foundation in Computer Science Fundamentals.With a track record of solving
               over 1000+ problems on coading Platforms like Leetcode,GeeksforGeeks,codechef(3*).
               I have honed my Problem Solving skills and Analytical Mindset.
               My expertise extends to various Computer Science Concepts,including Object-Oriented Programming
               (OOPS) in C++,Operating Systems(OS),DataBase Management Systems(DBMS).
               I believe in the Power of continuous learning and enjoy staying updated with the latest 
               trends and advancements int the tech world.
              </h5>
            </div>
          </div>
        </div>
      {/* </Jump> */}
    </>
  );
};

export default About;
