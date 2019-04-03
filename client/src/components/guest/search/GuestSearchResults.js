import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../Menu";
import Loading from "../../Loading";
import { getSearchResults } from "../../../actions/guestSearchActions";
import GuestSearchContent from "./GuestSearchContent";

class GuestSearchResults extends Component {
  componentDidMount() {
    this.props.getSearchResults(this.props.match.params.place);
  }

  render() {
    const { searchLoading, searchResults } = this.props.guestSearch;


    if (searchLoading) {
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
            <div className="wrap">
              <h1>Search Results</h1>
              <div className="tours">
                {searchResults.map(result => {
                  return (
                    <GuestSearchContent key={result._id} result={result} />
                  );
                })}
              </div>
            </div>
          </main>
        </>
      );
    }

  }
}

const mapStateToProps = state => ({
  guestSearch: state.guestSearch
});

export default connect(
  mapStateToProps,
  { getSearchResults }
)(GuestSearchResults);
