import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Components
import GuideLogin from "./components/guide/auth/GuideLogin";
import GuideRegister from "./components/guide/auth/GuideRegister";
import Myprofile from "./components/guide/profile/Myprofile";
import CreateProfile from "./components/guide/profile/CreateProfile";
import EditProfile from "./components/guide/profile/EditProfile";
import Index from "./components/Index";
import Navbar from "./components/guide/Navbar";

// Redux store
import store from "./store";

// Redux Provider
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={Index} />
            <Route path="/guide/login" component={GuideLogin} />
            <Route path="/guide/register" component={GuideRegister} />
            <Route path="/guide/myprofile" component={Myprofile} />
            <Route path="/guide/createprofile" component={CreateProfile} />
            <Route path="/guide/editprofile" component={EditProfile} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
