import React, { Component } from "react";
import { connect } from "react-redux";
import { guestLogoutAction } from "../actions/guestAuthActions";
import { getAllTours } from "../actions/guestToursActions";
import Form from "./Form";
import GuestMain from "./GuestMain";
import Tour from "./guest/tours/Tour";

class GuestIndex extends Component {
  componentDidMount() {
    this.props.getAllTours();
  }

  logOut = () => {
    this.props.guestLogoutAction();
  };
  render() {
    const { guestAuthenticated } = this.props.guestAuth;
    const { allTours, allToursLoading } = this.props.guestTours;
    return (
      <div className="index">
        {!guestAuthenticated ? (
          <Form login="/guest/login" register="/guest/register" />
        ) : (
          <GuestMain logOut={this.logOut} />
        )}
        {allToursLoading ? (
          <h2>Loading</h2>
        ) : (
          allTours.map(tour => {
            return <Tour tour={tour} />;
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestAuth: state.guestAuth,
  guestTours: state.guestTours
});

export default connect(
  mapStateToProps,
  { guestLogoutAction, getAllTours }
)(GuestIndex);
