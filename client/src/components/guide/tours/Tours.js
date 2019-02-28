import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getTours } from "../../../actions/guideToursActions";

export class Tours extends Component {
  componentDidMount = () => {
    this.props.getTours();
  };
  render() {
    const { tours, toursLoading } = this.props.guideTours;

    return (
      <div>
        {tours.map(tour => (
          <div>
            <h2>{tour.title}</h2>
            <h2>{tour.place}</h2>
            <h2>{tour.duration}</h2>
            <h2>{tour.people}</h2>
            <h2>{tour.description}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guideTours: state.guideTours
});

export default connect(
  mapStateToProps,
  { getTours }
)(Tours);
