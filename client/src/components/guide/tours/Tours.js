import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTours } from "../../../actions/guideToursActions";
import SingleTour from "./SingleTour";

export class Tours extends Component {
  render() {
    const { toursLoading, tours } = this.props.guideTours;
    if (toursLoading) {
      return <h1>Loading </h1>;
    } else {
      return (
        <div className="posts">
          {tours.map(tour => (
            <SingleTour
              key={tour._id}
              title={tour.title}
              place={tour.place}
              duration={tour.duration}
              people={tour.people}
              description={tour.description}
              tour_id={tour._id}
              tourImage={tour.tourImage}
            />
          ))}
          <Link to="/guide/addtour">Add </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideTours: state.guideTours
});

export default connect(
  mapStateToProps,
  { getTours }
)(Tours);
