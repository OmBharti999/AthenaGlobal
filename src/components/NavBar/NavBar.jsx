import NavCard from "../NavCard/NavCard";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

import "./navbar.css";

const arr = [
  {
    src:
      "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
    heading: "Consult a doctor"
  },
  {
    src: "https://medlineplus.gov/images/Medicines_share.jpg",
    heading: "Order Medicine"
  },
  {
    src:
      "https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg",
    heading: "Book for Diagnostic"
  }
];

function NavBar() {
  return (
    <div className="navbar">
      {arr.map((item, i) => (
        <div className={`nav-item ${i==2?"active22":""}`} key={i}>
          <NavCard src={item.src} heading={item.heading} />
        </div>
      ))}
      <div className="nav-item">
        <div className=" navcard links">
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
