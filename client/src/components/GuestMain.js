import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTours } from "../actions/guestToursActions";
import GuestMainContent from "./GuestMainContent";

class GuestMain extends Component {
  componentDidMount() {
    this.props.getAllTours();
  }
  render() {
    const { allToursLoading, allTours } = this.props.guestTours;
    return (
      <div>
        {allToursLoading ? (
          <h1>Loading</h1>
        ) : (
          allTours.map(tour => {
            return <GuestMainContent key={tour._id} tour={tour} />;
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestTours: state.guestTours
});

export default connect(
  mapStateToProps,
  { getAllTours }
)(GuestMain);
