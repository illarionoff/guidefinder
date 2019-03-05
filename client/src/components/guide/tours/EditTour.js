import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

// Actions
import {
  getCurrentTour,
  editTour,
  deleteTour
} from "../../../actions/guideToursActions";

export class EditTour extends Component {
  state = {
    title: "",
    place: "",
    duration: "",
    people: "",
    description: ""
  };

  componentDidMount = () => {
    this.props.getCurrentTour(this.props.match.params.id);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.guideTours.tour.title,
      place: nextProps.guideTours.tour.place,
      duration: nextProps.guideTours.tour.duration,
      people: nextProps.guideTours.tour.people,
      description: nextProps.guideTours.tour.description
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickSubmit = e => {
    e.preventDefault();

    let tourData = {};
    tourData.title = this.state.title;
    tourData.place = this.state.place;
    tourData.duration = this.state.duration;
    tourData.people = this.state.people;
    tourData.description = this.state.description;
    console.log(tourData);
    this.props.editTour(
      this.props.match.params.id,
      tourData,
      this.props.history
    );
  };

  onClickDelete = e => {
    e.preventDefault();
    this.props.deleteTour(this.props.match.params.id, this.props.history);
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    const { toursLoading, tour } = this.props.guideTours;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      let editTourContent;
      if (tour === null || toursLoading) {
        return <h1>Loading </h1>;
      } else {
        return (
          <div className="login-page">
            <div className="form">
              <form className="register-form" onSubmit={this.onClickSubmit}>
                <input
                  value={this.state.title}
                  onChange={this.onChange}
                  name="title"
                  type="text"
                  placeholder="Tour name"
                />
                <input
                  value={this.state.place}
                  onChange={this.onChange}
                  name="place"
                  type="text"
                  placeholder="Tour place"
                />
                <input
                  value={this.state.duration}
                  onChange={this.onChange}
                  name="duration"
                  type="text"
                  placeholder="Tour duration"
                />
                <input
                  value={this.state.people}
                  onChange={this.onChange}
                  name="people"
                  type="text"
                  placeholder="Group size"
                />
                <input
                  value={this.state.description}
                  onChange={this.onChange}
                  name="description"
                  type="text"
                  placeholder="Tour description"
                />
                <button>update tour</button>
              </form>
            </div>
            <button onClick={this.onClickDelete}>delete tour</button>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guideTours: state.guideTours
});

export default connect(
  mapStateToProps,
  { getCurrentTour, editTour, deleteTour }
)(withRouter(EditTour));
