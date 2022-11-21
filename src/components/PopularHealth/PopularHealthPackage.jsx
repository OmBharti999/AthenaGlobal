import Card from "../Cards/Card";
// PopularHealthPackage

import "./php.css";

export default function PopularHealthPackage() {
  return (
    <div className="PopularTest container php">
      <div className="title-popular">
        <h3 className="card-holder-title">Popular Health Packages</h3>
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
