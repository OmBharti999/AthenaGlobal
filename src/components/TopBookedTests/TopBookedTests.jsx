import Card from "../Cards/Card";

import "./tpt.css";

export default function TopBookedTests() {
  return (
    <div className="PopularTest container tpt">
      <div className="title-popular">
        <h3 className="card-holder-title">Top Booked Tests</h3>
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
