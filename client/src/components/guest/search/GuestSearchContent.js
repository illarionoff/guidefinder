import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  getAllReservations,
  cancelReservation
} from "../../../actions/guestReservationActions";

class GuestSearchContent extends Component {
  componentDidMount = () => {
    this.props.getAllReservations();
  };

  handleDelete = e => {
    // console.log(this.props);
    this.props.cancelReservation(this.props.result._id, this.props.history);
  };

  render() {
    const {
      title,
      place,
      duration,
      description,
      _id,
      tourImage
    } = this.props.result;

    let actionButton;

    if (
      this.props.guestReservations.allReservations.some(reservation => {
        return reservation.tourID === this.props.result._id;
      })
    ) {
      actionButton = (
        <button
          className="btn btn--cancel"
          onClick={this.handleDelete}
          style={{ marginTop: "auto" }}
        >
          Cancel Reservation
        </button>
      );
    } else {
      actionButton = (
        <button className="btn btn--success" style={{ marginTop: "auto" }}>
          <Link
            to={{
              pathname: `/guest/alltours/${_id}`
            }}
          >
            Check
          </Link>
        </button>
      );
    }

    return (
      <div className="tours__single">
        <img src={`/${tourImage}`} alt="" />
        <h2>{title}</h2>
        <h3>{place}</h3>
        <h3>
          Guide name: <span className="focus">Jose</span>
        </h3>
        <h3>
          Duration: <span className="focus">{duration}</span>
        </h3>
        <p>{description}</p>
        {actionButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestReservations: state.guestReservations
});

export default connect(
  mapStateToProps,
  { getAllReservations, cancelReservation }
)(withRouter(GuestSearchContent));
