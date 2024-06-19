import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <ul className="footer-icons">
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:youremail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
       
      </div>
    </footer>
  );
};

export default Contact;