import { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>404</h1>
        <h2 className="text-center">
          Oops! Our services hasn't started on Mars yet... :(
        </h2>
        <h3>
          Let us guide you to back to <Link to="/" className="link-text">Earth</Link>.
        </h3>
      </div>
    )
  };
};

export default NotFound;