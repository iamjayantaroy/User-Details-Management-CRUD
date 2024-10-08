import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details Of User Id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>
                    Name:
                    {user.name}
                  </b>
                </li>
                <li className="list-group-item">
                  <b>
                    Username:
                    {user.username}
                  </b>
                </li>
                <li className="list-group-item">
                  <b>
                    Email:
                    {user.email}
                  </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
