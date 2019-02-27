import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import GuideLogin from "./components/guide/auth/GuideLogin";
import GuideRegister from "./components/guide/auth/GuideRegister";
import Index from "./components/Index";

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
            <Route exact path="/" component={Index} />
            <Route path="/guide/login" component={GuideLogin} />
            <Route path="/guide/register" component={GuideRegister} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
