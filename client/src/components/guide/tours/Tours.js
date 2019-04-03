import React from "react";
import SingleTour from "./SingleTour";

export default function Tours({ tours }) {
  return (
    <main className="page page--eighty">
      <div className="wrap">
        <h1>All Tours</h1>
        <div className="tours">
          {tours.map(tour => (
            <SingleTour key={tour._id} tour={tour} />
          ))}
        </div>
      </div>
    </main>
  );
}
