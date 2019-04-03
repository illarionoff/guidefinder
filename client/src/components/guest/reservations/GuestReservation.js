import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../Menu";
import Loading from "../../Loading";

import {
  getAllReservations,
  cancelReservation,
  setAllReservationsLoading
} from "../../../actions/guestReservationActions";
import GuestReservationContent from "./GuestReservationContent";

class GuestReservation extends Component {
  componentDidMount() {
    this.props.getAllReservations();
  }

  render() {
    const {
      allReservationsLoading,
      allReservations
    } = this.props.guestReservations;

    if (allReservationsLoading) {
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
            <h1>My Reservations</h1>

            <div className="wrap">
              <div className="reservations">
                {allReservations.map(reservation => {
                  return (
                    <GuestReservationContent
                      key={reservation._id}
                      reservation={reservation}
                      cancelReservation={cancelReservation}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guestReservations: state.guestReservations
});

export default connect(
  mapStateToProps,
  { getAllReservations, cancelReservation, setAllReservationsLoading }
)(GuestReservation);
