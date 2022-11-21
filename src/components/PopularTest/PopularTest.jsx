import Card from "../Cards/Card";

import "./popular.css";

export default function PopularTest() {
  return (
    <div className="PopularTest container">
      <div className="title-popular">
        <h3 className="card-holder-title">Popular Tests</h3>
        <div className="view">View All</div>
      </div>
      <div className="card-holder">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="view-2">View All</div>
    </div>
  );
}
