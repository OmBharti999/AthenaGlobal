// import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

import "./navcard.css";
export default function NavCard({ src, heading }) {
  return (
    <div className="navcard">
      <div>
        <img src={src} alt={"photo"} height="40px" width="40px" />
      </div>
      <h6>{heading}</h6>
    </div>
  );
}
