import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentTour } from "../../../actions/guestToursActions";
import { withRouter } from "react-router-dom";
import DayPicker from "react-day-picker";
import Menu from "../Menu";
import Loading from "../../Loading";
import {
  addReservation,
  cancelReservation,
  getAllReservations
} from "../../../actions/guestReservationActions";

import "react-day-picker/lib/style.css";

class GuestTour extends Component {
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
    reservation.tourID = this.props.guestTours.tour._id;
    reservation.tourImage = this.props.guestTours.tour.tourImage;
    reservation.title = this.props.guestTours.tour.title;
    reservation.place = this.props.guestTours.tour.place;
    reservation.duration = this.props.guestTours.tour.duration;
    reservation.people = this.props.guestTours.tour.people;
    reservation.description = this.props.guestTours.tour.description;
    reservation.selectedDate = this.state.selectedDate;
    console.log(reservation);

    this.props.addReservation(reservation, this.props.history);
  };
  componentDidMount = () => {
    this.props.getCurrentTour(this.props.match.params.id);
    this.props.getAllReservations();
  };
  render() {
    const { tour, allToursLoading } = this.props.guestTours;
    let actionButton;

    if (
      this.props.guestReservations.allReservations.some(reservation => {
        return reservation.tourID === this.props.guestTours.tour._id;
      })
    ) {
      actionButton = (
        <button className="btn btn--cancel" onClick={this.handleDelete}>
          Cancel Reservation
        </button>
      );
    } else {
      actionButton = (
        <button className="btn btn--success" onClick={this.handleSubmit}>
          Reserve
        </button>
      );
    }

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
            <button
              className="action"
              onClick={() => {
                window.history.back();
              }}
            >
              <i className="fas fa-chevron-left" />
              GO BACK
            </button>
            <div className="wrap">
              <div className="single-tour">
                <div
                  className="single-tour__image"
                  style={{ backgroundImage: `url(/${tour.tourImage})` }}
                >
                  <h1>{tour.place}</h1>
                </div>
                <div className="single-tour__body">
                  <div className="single-tour__text">
                    <h2>{tour.title}</h2>

                    <h3>{tour.duration}</h3>
                    <h3>{tour.people}</h3>
                    <p>{tour.description}</p>
                  </div>
                  <div className="single-tour__calendar">
                    <DayPicker
                      selectedDays={this.state.selectedDay}
                      onDayClick={this.handleDayClick}
                      disabledDays={[
                        {
                          before: new Date()
                        }
                      ]}
                    />
                    {actionButton}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guestTours: state.guestTours,
  guestReservations: state.guestReservations
});

export default connect(
  mapStateToProps,
  { getCurrentTour, addReservation, cancelReservation, getAllReservations }
)(withRouter(GuestTour));
