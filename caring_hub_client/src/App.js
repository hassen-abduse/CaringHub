import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import { __store__ } from "./redux/configureStore";
import OrgDashboard from "./organization/OrgDashboard";
import AdminDashboard from "./admin/AdminDashboard";
const store = __store__();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AdminDashboard />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
