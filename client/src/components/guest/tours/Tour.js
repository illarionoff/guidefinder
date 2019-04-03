import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DayPicker from "react-day-picker";

import {
  addReservation,
  cancelReservation
} from "../../../actions/guestReservationActions";

import "react-day-picker/lib/style.css";

class Tour extends Component {
  state = {
    selectedDate: undefined
  };

  handleDayClick = day => {
    this.setState({ selectedDate: day });
  };

  handleDelete = e => {
    // console.log(this.props);
    this.props.cancelReservation(this.props.tour._id, this.props.history);
  };

  handleSubmit = e => {
    e.preventDefault();
    let reservation = {};

    reservation.guide = this.props.guestTours.tour.user;
    reservation.tourID = this.props.tour._id;
    reservation.tourImage = this.props.tour.tourImage;
    reservation.title = this.props.tour.title;
    reservation.place = this.props.tour.place;
    reservation.duration = this.props.tour.duration;
    reservation.people = this.props.tour.people;
    reservation.description = this.props.tour.description;
    reservation.selectedDate = this.state.selectedDate;
    console.log(reservation);

    this.props.addReservation(reservation, this.props.history);
  };

  render() {
    const modifiers = {
      color: "green"
    };

    let actionButton;

    if (
      this.props.guestReservations.allReservations.some(reservation => {
        return reservation.tourID === this.props.tour._id;
      })
    ) {
      actionButton = (
        <button onClick={this.handleDelete}>Cancel Reservation</button>
      );
    } else {
      actionButton = <button onClick={this.handleSubmit}>Submit</button>;
    }

    return (
      <div className="container">
        <div className="tour-page">
          {this.props.tour.tourImage ? (
            <img src={`/${this.props.tour.tourImage}`} alt="" />
          ) : null}
          <h1>{this.props.tour.title}</h1>
          <h2>{this.props.tour.place}</h2>
          <h2>{this.props.tour.duration}</h2>
          <h2>{this.props.tour.people}</h2>
          <h2>{this.props.tour.description}</h2>
          <DayPicker
            selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
            disabledDays={[
              {
                before: new Date()
              }
            ]}
            modifiers={modifiers}
          />
          {actionButton}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestTours: state.guestTours,
  guestAuth: state.guestAuth,
  guestReservations: state.guestReservations
});

export default connect(
  mapStateToProps,
  { addReservation, cancelReservation }
)(withRouter(Tour));
