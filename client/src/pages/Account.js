import React, { useContext, useEffect } from "react";
import Container from "./../components/Container";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import API from "../utils/API";

const Account = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  const deleteUser = async () => {
    let token = localStorage.getItem("auth-token");
    try {
      await API.deleteUser(token);
      await API.deleteConfirm(token);
      history.push("/");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    // update user
  };

  return (
    <Container>
      <h3 className="font-weight-bold">Account Settings</h3>
      <p className="text-muted">Change your profile and account settings</p>
      <hr />

      <form>
        <div className="form-row">
          <div class="form-group col-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="firstName"
              value={userData.user?.firstName}
            />
          </div>
          <div class="form-group col-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              value={userData.user?.lastName}
            />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              value={userData.user?.displayName}
            />
          </div>
          <div class="form-group col-8">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              value={userData.user?.email}
            />
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            class="form-control"
            id="zipCode"
            name="zipCode"
            value={userData.user?.zipCode}
          />
        </div>
      </form>

      <button className="btn btn-success mr-3" onClick={updateUser}>
        Save Profile
      </button>
      <button className="btn btn-danger" onClick={deleteUser}>
        Delete Account
      </button>
    </Container>
  );
};

export default Account;
