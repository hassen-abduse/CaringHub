import "./App.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { __store__ } from "./redux/configureStore";
import Volunteers from "./organization/pages/volunteers/Volunteers";
import Applicants from "./organization/pages/applicants/Applicant";

const store = __store__();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* <Volunteers /> */}
            <Applicants />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
