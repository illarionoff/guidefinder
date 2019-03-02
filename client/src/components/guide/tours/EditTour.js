import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

// Actions
// import { addTour } from "../../../actions/guideToursActions";

export class EditTour extends Component {
  state = {
    title: "",
    place: "",
    duration: "",
    people: "",
    description: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  //   onChange = e => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  //   onClickSubmit = e => {
  //     e.preventDefault();
  //     let tourData = {};
  //     tourData.title = this.state.title;
  //     tourData.place = this.state.place;
  //     tourData.duration = this.state.duration;
  //     tourData.people = this.state.people;
  //     tourData.description = this.state.description;
  //     console.log(tourData);
  //     this.props.addTour(tourData, this.props.history);
  //   };

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

export default connect(mapStateToProps)(withRouter(EditTour));
