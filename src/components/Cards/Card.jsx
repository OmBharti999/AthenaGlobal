// import Home from "./pages/Home";
// import Footer from "./components/Footer/Footer";
import "./card.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-container-upper">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/realistic-colorful-microscope-magnifying-laboratory-instrument-research-science-chemistry_99660-542.jpg?w=2000"
            alt="microscope"
            width="100px"
          />
        </div>
        <div className="card-title">Diabetes Test</div>
        <div className="card-discription">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          Lorem Ipsum Generator.
        </div>
        <div className="card-extra">Includes 65 test</div>
      </div>
      <div className="card-container-down">
        <div className="card-sec">
          <div className="amount-card">₹300.00</div>
          <div className="amount-card-discount">
            <strike>₹300</strike> 50% off
          </div>
        </div>

        <div className="cart-btn">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
