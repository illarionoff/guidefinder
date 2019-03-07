import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentTour } from "../../../actions/guestToursActions";

class GuestTour extends Component {
  componentDidMount = () => {
    this.props.getCurrentTour(this.props.match.params.id);
  };
  render() {
    const { tour, allToursLoading } = this.props.guestTours;
    return <div>{allToursLoading ? <h2>Loading</h2> : tour.title}</div>;
  }
}

const mapStateToProps = state => ({
  guestTours: state.guestTours
});

export default connect(
  mapStateToProps,
  { getCurrentTour }
)(GuestTour);
