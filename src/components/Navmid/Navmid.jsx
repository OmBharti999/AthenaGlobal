import { MdShoppingCart } from "react-icons/md";
import "./navmid.css";

export default function Navmid() {
  return (
    <div className="navmid">
      <div className="logo-bold">Logo</div>
      <div className="log-cart">
        <div className="button">Login|SignUp</div>
        <div>
          <MdShoppingCart />
        </div>
      </div>
    </div>
  );
}
