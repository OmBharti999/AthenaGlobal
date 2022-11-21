import { MdLocationPin } from "react-icons/md";

import "./navsearch.css";

export default function Navsearch() {
  return (
    <div className="Navsearch">
      <div className="select-cont">
        <MdLocationPin />
        <select className="select">
          <option>Madupur</option>
        </select>
      </div>
      <div className="input-cont">
        <input className="input" />
      </div>
      <div>
        <button className="btn-pura">Search</button>
      </div>
    </div>
  );
}
