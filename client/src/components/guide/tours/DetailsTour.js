import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentTour } from "../../../actions/guideToursActions";
import { getAllReservations } from "../../../actions/guideReservationActions";
import Menu from "../Menu";
import Loading from "../../Loading";
import DetailsTourContent from "./DetailsTourContent";
import TourReservations from "./TourReservations";

export class DetailsTour extends Component {
  componentDidMount() {
    this.props.getCurrentTour(this.props.match.params.id);
    this.props.getAllReservations();
  }
  render() {
    const {
      guideReservationsLoading,
      guideReservations
    } = this.props.guideReservations;

    const { toursLoading, tour } = this.props.guideTours;

    let reservs = guideReservations.filter(
      reservation => reservation.tourID === this.props.match.params.id
    );

    if (toursLoading) {
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
            <DetailsTourContent tour={tour} />
            {guideReservationsLoading ? null : (
              <TourReservations reservs={reservs} />
            )}
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideTours: state.guideTours,
  guideReservations: state.guideReservations
});

export default connect(
  mapStateToProps,
  { getCurrentTour, getAllReservations }
)(DetailsTour);
