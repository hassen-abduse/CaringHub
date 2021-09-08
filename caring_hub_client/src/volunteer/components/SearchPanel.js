import React from "react";
import "./search.css";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
  };
  render() {
    return (
      <div className="container">
        {/*Heading*/}

        {/*Search Input*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <label
              style={{ width: "450px" }}
              className="search-label mb-5"
              htmlFor="search-input"
            >
              <input
                type="text"
                value=""
                id="search-input"
                placeholder="Search..."
                onChange={this.handleOnInputChange}
              />
              <i className="fa fa-search search-icon" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
