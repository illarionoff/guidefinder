import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./scss/App.scss";

// Components
// Common
import MainIndex from "./components/MainIndex";
import Navbar from "./components/navigation/Navbar";
import Page404 from "./components/page404";

// Auth Components
import GuideLogin from "./components/guide/auth/GuideLogin";
import GuestLogin from "./components/guest/auth/GuestLogin";
import GuideRegister from "./components/guide/auth/GuideRegister";
import GuestRegister from "./components/guest/auth/GuestRegister";

// Guide Components
import GuideIndex from "./components/guide/GuideIndex";
import GuestIndex from "./components/guest/GuestIndex";
import CreateProfile from "./components/guide/profile/CreateProfile";
// import MyProfile from "./components/guide/profile/MyProfile";
import EditProfile from "./components/guide/profile/EditProfile";

import GuideTours from "./components/guide/tours/GuideTours";
import EditTour from "./components/guide/tours/EditTour";
import DetailsTour from "./components/guide/tours/DetailsTour";
import AddTour from "./components/guide/tours/AddTour";
import AllReservations from "./components/guide/tours/AllReservations";

import GuestTour from "./components/guest/tours/GuestTour";
import GuestAllTours from "./components/guest/tours/GuestAllTours";
import GuestReservation from "./components/guest/reservations/GuestReservation";
import GuestSearchResults from "./components/guest/search/GuestSearchResults";

// Redux store
import store from "./store";

// Redux Provider
import { Provider } from "react-redux";

// JWT decoder
import jwt_decode from "jwt-decode";
// setAuthToken
import setAuthToken from "./utils/setAuthToken";
// Setting current user
import { setCurrentUser, guideLogoutAction } from "./actions/guideAuthActions";
import { setCurrentGuest, guestLogoutAction } from "./actions/guestAuthActions";
import { clearCurrentProfile } from "./actions/guideProfileActions";
import ProfileData from "./components/guide/profile/ProfileData";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and ghet user info and expirtion
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthentricated
  console.log(decoded);
  if (decoded.status === "guide") {
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout User
      store.dispatch(guideLogoutAction());
      // TODO: Clear current profile
      store.dispatch(clearCurrentProfile());
      // Redirect to Login
      window.location.href = "/";
    }
  } else {
    store.dispatch(setCurrentGuest(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout User
      store.dispatch(guestLogoutAction());
      // // TODO: Clear current profile
      // store.dispatch(clearCurrentProfile());
      // Redirect to Login
      window.location.href = "/";
    }
  }

  // // Check for expired tocken
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   // Logout User
  //   store.dispatch(guideLogoutAction());
  //   // TODO: Clear current profile
  //   store.dispatch(clearCurrentProfile());
  //   // Redirect to Login
  //   window.location.href = "/login";
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Navbar />
              <section>
                <Switch>
                  <Route exact path="/" component={MainIndex} />

                  <Route exact path="/guide" component={GuideIndex} />
                  <Route exact path="/guest" component={GuestIndex} />
                  <Route path="/guide/login" component={GuideLogin} />
                  <Route path="/guest/login" component={GuestLogin} />
                  <Route path="/guide/register" component={GuideRegister} />
                  <Route path="/guest/register" component={GuestRegister} />
                  <Route path="/guide/myprofile" component={ProfileData} />
                  <Route path="/guide/tours" component={GuideTours} />
                  <Route exact path="/guide/addtour" component={AddTour} />
                  <Route path="/guide/edittour/:id" component={EditTour} />
                  <Route path="/guide/alltours/:id" component={DetailsTour} />
                  <Route
                    path="/guide/reservations"
                    component={AllReservations}
                  />
                  <Route
                    path="/guide/createprofile"
                    component={CreateProfile}
                  />
                  <Route path="/guide/editprofile" component={EditProfile} />
                  <Route
                    exact
                    path="/guest/alltours"
                    component={GuestAllTours}
                  />
                  <Route
                    path="/guest/reservations"
                    component={GuestReservation}
                  />
                  <Route path="/guest/alltours/:id" component={GuestTour} />
                  <Route
                    path="/guest/search/:place"
                    component={GuestSearchResults}
                  />
                  <Route
                    render={() => <Redirect to="/404" />}
                    component={Page404}
                  />
                </Switch>
              </section>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
