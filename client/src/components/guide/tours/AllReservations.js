import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllReservations } from "../../../actions/guideReservationActions";
import Menu from "../Menu";
import Loading from "../../Loading";

export class DetailsTour extends Component {
  componentDidMount() {
    this.props.getAllReservations();
  }
  render() {
    const {
      guideReservationsLoading,
      guideReservations
    } = this.props.guideReservations;

    if (guideReservationsLoading) {
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
            <h2>All Reservations</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {guideReservations.map(reservation => {
                  let date = new Date(reservation.selectedDate);
                  let fullDate =
                    date.getFullYear() +
                    "-" +
                    (date.getMonth() + 1) +
                    "-" +
                    date.getDate();

                  let today = new Date();

                  if (today > date) {
                    return (
                      <tr key={reservation._id}>
                        <td>
                          <p>{fullDate}</p>
                        </td>
                        <td>
                          <Link to={`/guide/alltours/${reservation.tourID}`}>
                            {reservation.title}
                          </Link>
                        </td>
                        <td>
                          <p>{reservation.user}</p>
                        </td>
                        <td>
                          <p>Completed</p>
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={reservation._id}>
                        <td>
                          <h3>{fullDate}</h3>
                        </td>
                        <td>
                          <Link to={`/guide/alltours/${reservation.tourID}`}>
                            {reservation.title}
                          </Link>
                        </td>
                        <td>
                          <h3>{reservation.user}</h3>
                        </td>
                        <td>
                          <h3>Upcoming</h3>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideReservations: state.guideReservations
});

export default connect(
  mapStateToProps,
  { getAllReservations }
)(DetailsTour);
