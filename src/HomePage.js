import React from "react";
import { Link } from "react-router-dom";
import Counter from "./images/counter.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className="my-4 row">
        <div className="col-md-3">
          <Link to="/use-state" className="text-decoration-none">
            <div className="card border-dark">
              <div className="card-header border-dark bg-dark text-white">
                useState(Counter)
              </div>
              <div className="card-body">
                <img src={Counter} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
