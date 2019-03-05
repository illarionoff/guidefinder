import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Components
import GuideLogin from "./components/guide/auth/GuideLogin";
import GuestLogin from "./components/guest/auth/GuestLogin";
import GuideRegister from "./components/guide/auth/GuideRegister";
import GuestRegister from "./components/guest/auth/GuestRegister";
import Myprofile from "./components/guide/profile/Myprofile";
import CreateProfile from "./components/guide/profile/CreateProfile";
import EditProfile from "./components/guide/profile/EditProfile";
import AddTour from "./components/guide/tours/AddTour";
import EditTour from "./components/guide/tours/EditTour";
import GuideIndex from "./components/GuideIndex";
import GuestIndex from "./components/GuestIndex";
import MainIndex from "./components/MainIndex";
import Navbar from "./components/guide/Navbar";

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
import { clearCurrentProfile } from "./actions/guideProfileActions";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and ghet user info and expirtion
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthentricated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired tocken
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(guideLogoutAction());
    // TODO: Clear current profile
    store.dispatch(clearCurrentProfile());
    // Redirect to Login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={MainIndex} />
            <Route exact path="/guide" component={GuideIndex} />
            <Route exact path="/guest" component={GuestIndex} />
            <Route path="/guide/login" component={GuideLogin} />
            <Route path="/guest/login" component={GuestLogin} />
            <Route path="/guide/register" component={GuideRegister} />
            <Route path="/guest/register" component={GuestRegister} />
            <Route path="/guide/myprofile" component={Myprofile} />
            <Route path="/guide/createprofile" component={CreateProfile} />
            <Route path="/guide/editprofile" component={EditProfile} />
            <Route path="/guide/addtour" component={AddTour} />
            <Route path="/guide/edittour/:id" component={EditTour} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
