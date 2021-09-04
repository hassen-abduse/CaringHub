import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import { __store__ } from "./redux/configureStore";
import OrgDashboard from "./organization/OrgDashboard";
<<<<<<< HEAD
=======
import ProfileCard from "./volunteer/components/ProfileCard";
import Dashboard from "./volunteer/pages/dashboard/Dashboard";
import Volunteers from "./organization/pages/volunteers/Volunteers";
import Landing from "./volunteer/pages/landing/Landing";

>>>>>>> 2bb657d44884ffba013648f01fc9c4f9d70a44a4
const store = __store__();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <OrgDashboard />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
