import React from "react";
import "../contact/Contact.css";
import phone from "../../assets/phone.svg";
import mail from "../../assets/email.svg";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_contents">
          <div className="contact_texts">
            <div className="contact_top">
              <h2>Contact us</h2>
              <p>
                Send for us your request and we will get in touch with you as
                soon as possible
              </p>
            </div>
            <div className="contact_bottom">
              <div className="phone">
                <img src={phone} alt="phone" />
                <h3>+380 98 782 82 23</h3>
              </div>
              <div className="phone">
                <img src={mail} alt="phone" />
                <h3>mailmail@gmail.com</h3>
              </div>
            </div>
          </div>
          <form action="">
            <label htmlFor="name">
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="text" placeholder="Your email" />
            </label>
            <label htmlFor="message">
              <textarea name="message" placeholder="Your message"></textarea>
            </label>
            <div className="send">
              <button>Send</button>
              <p>By sending request you agree to out Pivacy&Policy</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
