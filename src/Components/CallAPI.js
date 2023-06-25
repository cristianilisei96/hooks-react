import React, { useEffect, useState } from "react";
import axios from "axios";

const CallAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?results=8&inc=id,name,gender,email,nat,phone,picture,location&noinfo"
      )
      .then((res) => setUsers(res.data.results));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h4>useEffect(APIRandomUser)</h4>
        </div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.location.postcode} className="col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={user.picture.large}
                  alt={user.name.first}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h5>
                  <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4>Loading users...</h4>
        )}
      </div>
    </div>
  );
};

export default CallAPI;
