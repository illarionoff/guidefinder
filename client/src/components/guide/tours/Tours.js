import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getTours } from "../../../actions/guideToursActions";

export class Tours extends Component {
  componentDidMount = () => {
    this.props.getTours();
  };
  render() {
    const { tours, toursLoading } = this.props.guideTours;

    if (tours.length > 0) {
      return (
        <div>
          {tours.map(tour => (
            <React.Fragment>
              <div>
                <h2>{tour.title}</h2>
                <h2>{tour.place}</h2>
                <h2>{tour.duration}</h2>
                <h2>{tour.people}</h2>
                <h2>{tour.description}</h2>
                <Link
                  to={{
                    pathname: `/guide/edittour/${tour._id}`,
                    id: tour.id
                  }}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button>
                  <Link to="/guide/addtour">Add tour</Link>
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <button>
            <Link to="/guide/addtour">Add tour</Link>
          </button>
        </div>
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
)(Tours);
