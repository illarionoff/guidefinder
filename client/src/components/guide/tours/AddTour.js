import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Menu from "../Menu";

// Actions
import { addTour } from "../../../actions/guideToursActions";

export class AddTour extends Component {
  state = {
    title: "",
    place: "",
    duration: "",
    people: "",
    description: "",
    selectedFile: "",
    errors: {}
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <Menu />
          <main class="page page--eighty">
            <h1>Add tour</h1>
            <div class="wrap">
              <div class="form-tour">
                <div
                  class="form-tour__image"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {this.state.errors.tourImage ? (
                    <label htmlFor="tourImage">
                      {this.state.errors.tourImage}
                    </label>
                  ) : null}
                  <input
                    type="file"
                    name="tourImage"
                    id=""
                    onChange={this.handleselectedFile}
                  />
                </div>
                <form
                  className="form-tour__input"
                  onSubmit={this.onClickSubmit}
                >
                  {this.state.errors.title ? (
                    <label htmlFor="title">{this.state.errors.title}</label>
                  ) : (
                    <label htmlFor="people">
                      Please add tour title (eg Mexico city tour, Bogota city
                      graffiti tour)
                    </label>
                  )}
                  <input
                    class="form-input"
                    value={this.state.title}
                    onChange={this.onChange}
                    name="title"
                    type="text"
                    placeholder="Tour name"
                  />
                  {this.state.errors.place ? (
                    <label htmlFor="place">{this.state.errors.place}</label>
                  ) : (
                    <label htmlFor="people">
                      Please enter exaxct tour location
                    </label>
                  )}
                  <input
                    class="form-input"
                    value={this.state.place}
                    onChange={this.onChange}
                    name="place"
                    type="text"
                    placeholder="Tour place"
                  />
                  {this.state.errors.duration ? (
                    <label htmlFor="duration">
                      {this.state.errors.duration}
                    </label>
                  ) : (
                    <label htmlFor="people">
                      Please specify tour duration (eg 2 hours, 6-8 hours, 2
                      days)
                    </label>
                  )}
                  <input
                    class="form-input"
                    value={this.state.duration}
                    onChange={this.onChange}
                    name="duration"
                    type="text"
                    placeholder="Tour duration"
                  />
                  {this.state.errors.people ? (
                    <label htmlFor="people">{this.state.errors.people}</label>
                  ) : (
                    <label htmlFor="people">
                      Please specify group size (eg 4 people, 10-15 people)
                    </label>
                  )}
                  <input
                    class="form-input"
                    value={this.state.people}
                    onChange={this.onChange}
                    name="people"
                    type="text"
                    placeholder="Group size"
                  />
                  {this.state.errors.description ? (
                    <label htmlFor="description">
                      {this.state.errors.description}
                    </label>
                  ) : (
                    <label htmlFor="description">
                      Please enter detailed tour description
                    </label>
                  )}
                  <textarea
                    value={this.state.description}
                    onChange={this.onChange}
                    cols="30"
                    rows="10"
                    name="description"
                    placeholder="Tour description"
                  />

                  <button className="btn  btn--success">ADD TOUR</button>
                </form>
              </div>
            </div>
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addTour }
)(withRouter(AddTour));
