import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentTour } from "../../../actions/guestToursActions";
import Tour from "./Tour";

class GuestTour extends Component {
  componentDidMount = () => {
    this.props.getCurrentTour(this.props.match.params.id);
  };
  render() {
    const { tour, allToursLoading } = this.props.guestTours;
    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>GO BACK</button>
        {allToursLoading ? <h2>Loading</h2> : <Tour tour={tour} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestTours: state.guestTours
});

export default connect(
  mapStateToProps,
  { getCurrentTour }
)(GuestTour);
