import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

// Actions
import { addTour } from "../../../actions/guideToursActions";

export class AddTour extends Component {
  state = {
    title: "",
    place: "",
    duration: "",
    people: "",
    description: "",
    selectedFile: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  onClickSubmit = e => {
    e.preventDefault();
    let tourData = new FormData();
    tourData.append("title", this.state.title);
    tourData.append("place", this.state.place);
    tourData.append("duration", this.state.duration);
    tourData.append("people", this.state.people);
    tourData.append("description", this.state.description);
    tourData.append(
      "tourImage",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    this.props.addTour(tourData, this.props.history);
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
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
              <input
                type="file"
                name=""
                id=""
                onChange={this.handleselectedFile}
              />
              <button>create profile</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth
});

export default connect(
  mapStateToProps,
  { addTour }
)(withRouter(AddTour));
