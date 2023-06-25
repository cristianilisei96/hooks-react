import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ navigation }) => {
  const filteredNavigation = navigation.filter((item) => item.name !== "Home");

  console.log(filteredNavigation);

  return (
    <div className="container">
      <div className="row">
        {filteredNavigation.map((item) => (
          <div key={item.name} className="col-md-6 mb-4">
            <Link to={item.href} className="text-decoration-none">
              <div className="card border-dark">
                <div className="card-header border-dark bg-dark text-white">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
