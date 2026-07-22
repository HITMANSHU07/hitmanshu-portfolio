import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full-Stack Developer</div>
            </h2>
          </div>
          
          {/* 🔴 Photo Section: Shows on both Laptop & Mobile */}
          <div className="main-profile-photo" style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <img 
              src="/images/mypicnbg.png.jpg" 
              alt="Himanshu Kumar" 
              style={{ maxWidth: "320px", width: "100%", borderRadius: "20px", objectFit: "cover", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }} 
            />
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Landing;
