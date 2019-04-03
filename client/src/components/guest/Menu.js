import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
  state = {
    searchPlace: undefined
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    if (this.state.searchPlace !== undefined) {
      this.props.history.push(`/guest/search/${this.state.searchPlace}`);
    }
  };

  render() {
    return (
      <aside>
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            <li>
              <i className="menu-icon fas fa-search-location" />
              <form onSubmit={this.onSearchSubmit} className="form-search">
                <input
                  name="searchPlace"
                  className="search-bar"
                  type="text"
                  placeholder="search"
                  onChange={this.onChange}
                />
              </form>
            </li>
            <li>
              <i className="menu-icon far fa-image" />
              <Link to="/guest/alltours" className="nav__link">
                Tours
              </Link>
            </li>
            <li>
              <i className="menu-icon far fa-list-alt" />
              <Link to="/guest/reservations" className="nav__link">
                My Reservations
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
export default connect(null)(withRouter(Menu));
