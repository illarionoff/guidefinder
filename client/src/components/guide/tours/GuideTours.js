import React, { Component } from "react";
import { connect } from "react-redux";
import Tours from "./Tours";
import Menu from "../Menu";
import Loading from "../../Loading";
import { getTours } from "../../../actions/guideToursActions";

class GuideTours extends Component {
  componentDidMount() {
    this.props.getTours();
  }

  render() {
    const { tours, toursLoading } = this.props.guideTours;

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
          <Tours tours={tours} getTours={this.props.getTours} />
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideTours: state.guideTours
});

export default connect(
  mapStateToProps,
  { getTours }
)(GuideTours);
