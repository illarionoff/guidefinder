import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Menu from "../Menu";
import Loading from "../../Loading";

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
    description: "",
    selectedFile: null,
    tourImage: ""
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
      description: nextProps.guideTours.tour.description,
      tourImage: nextProps.guideTours.tour.tourImage
    });
  }

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
    if (this.state.selectedFile !== null) {
      tourData.append(
        "tourImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    } else {
      tourData.append("tourImage", this.state.tourImage);
    }

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
      if (tour === null || toursLoading) {
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
            <main class="page page--eighty">
              <h1>Edit tour</h1>
              <button
                className="action"
                onClick={() => {
                  window.history.back();
                }}
              >
                <i className="fas fa-chevron-left" />
                GO BACK
              </button>
              <div class="wrap">
                <div class="form-tour">
                  <div
                    class="form-tour__image"
                    style={{
                      backgroundImage: `url(/${
                        this.props.guideTours.tour.tourImage
                        })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  >
                    <input
                      type="file"
                      name=""
                      id=""
                      onChange={this.handleselectedFile}
                    />
                  </div>
                  <form
                    className="form-tour__input"
                    onSubmit={this.onClickSubmit}
                  >
                    <input
                      class="form-input"
                      value={this.state.title}
                      onChange={this.onChange}
                      name="title"
                      type="text"
                      placeholder="Tour name"
                    />
                    <input
                      class="form-input"
                      value={this.state.place}
                      onChange={this.onChange}
                      name="place"
                      type="text"
                      placeholder="Tour place"
                    />
                    <input
                      class="form-input"
                      value={this.state.duration}
                      onChange={this.onChange}
                      name="duration"
                      type="text"
                      placeholder="Tour duration"
                    />
                    <input
                      class="form-input"

                      value={this.state.people}
                      onChange={this.onChange}
                      name="people"
                      type="text"
                      placeholder="Group size"
                    />
                    <textarea
                      cols="30"
                      rows="10"
                      value={this.state.description}
                      onChange={this.onChange}
                      name="description"
                      placeholder="Tour description"
                    />

                    <button className="btn btn--success">UPDATE TOUR</button>
                  </form>
                </div>
                <button
                  className="btn btn--cancel"
                  style={{ marginTop: "50px" }}
                  onClick={this.onClickDelete}
                >
                  DELETE TOUR
                </button>
              </div>
            </main>
          </>
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
