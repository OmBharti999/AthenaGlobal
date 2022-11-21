import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdCall } from "react-icons/md";
// card is below

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h5>Quick links</h5>
        <div>FAQ's</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="footer-section">
        <h5>Services</h5>
        <div>Order Medicine</div>
        <div>Lab Tests</div>
        <div>Doctor Consultation</div>
      </div>
      <div className="footer-section">
        <h5>Our Policies</h5>
        <div> Privacy Policy</div>
        <div>Terms and Conditions</div>
        <div>Cancellation Policy</div>
      </div>
      <div className="footer-section">
        <h5>Social</h5>
        <div className="footer-links">
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
        </div>
        <div>Need Help?</div>
        <div>
          <MdCall /> +91 9876543210
        </div>
      </div>
      <div className="footer-section">
        <h5>Our App</h5>
        <div className="cc-container">
          <Card
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            upper="Download on the"
            title="App Store"
          />
        </div>
        <div className="cc-container">
          <Card
            src="https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg?ssl=1"
            upper="Get it on"
            title="Google Play Store"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ src, upper, title }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src} alt="img" />
      </div>
      <div>
        <div>{upper}</div>
        <div className="bold">{title}</div>
      </div>
    </div>
  );
}
