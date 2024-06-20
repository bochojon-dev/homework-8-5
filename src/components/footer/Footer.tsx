import React from "react";
import fLogo from "../../assets/logo-footer.svg";
import fInstagram from "../../assets/instagram.svg";
import fFacebook from "../../assets/facebook.svg";
import "../footer/Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <div className="footer_top">
            <ul>
              <li>ALL PRODUCTS</li>
              <li>ABPUT SEEDRA</li>
              <li>OUR BLOG</li>
            </ul>
            <img src={fLogo} width={125} alt="logo" />
            <ul>
              <li>Terms&Conditions </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer_bottom">
            <div className="footer_icons">
              <img src={fInstagram} alt="instagram" width={24} height={24} />
              <img src={fFacebook} alt="fcebbok" width={24} height={24} />
            </div>
            <ul>
              <li style={{ border: "none" }}>All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
