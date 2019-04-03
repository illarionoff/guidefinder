import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { guestLogoutAction } from "../../../actions/guestAuthActions";
import { getAllTours } from "../../../actions/guestToursActions";
import Menu from "../Menu";
import Loading from "../../Loading";
import SingleTour from "./SingleTour";

class GuestIndex extends Component {
  componentDidMount() {
    this.props.getAllTours();
  }

  render() {
    const { guestAuthenticated } = this.props.guestAuth;
    const { allTours, allToursLoading } = this.props.guestTours;

    if (!guestAuthenticated) {
      return <Redirect to="/guest/login" />;
    } else {
      if (allToursLoading) {
        return (
          <>
            <Menu />
            <Loading />
          </>
        );
      } else {
        return (
          <>
            <Menu />
            <main className="page page--eighty">
              <div className="wrap">
                <h1>All Tours</h1>
                <div className="tours">
                  {allTours.map(tour => (
                    <SingleTour key={tour._id} tour={tour} />
                  ))}
                </div>
              </div>
            </main>
          </>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  guestAuth: state.guestAuth,
  guestTours: state.guestTours
});

export default connect(
  mapStateToProps,
  { getAllTours }
)(GuestIndex);
