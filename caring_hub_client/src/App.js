import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { __store__ } from "./redux/configureStore";
<<<<<<< HEAD
import OrgDashboard from "./organization/OrgDashboard";
import AdminDashboard from "./admin/AdminDashboard";
=======
>>>>>>> c693e8ff93db6c7b677ed278f9e99ec63e5b2ad9
const store = __store__();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
<<<<<<< HEAD
            <AdminDashboard />
=======
            <Main />
>>>>>>> c693e8ff93db6c7b677ed278f9e99ec63e5b2ad9
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
