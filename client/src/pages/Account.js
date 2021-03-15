import React, { useContext, useEffect } from "react";
import Container from "./../components/Container";
import {useHistory} from "react-router-dom"
import UserContext from "../context/UserContext"
import API from "../utils/API"

const Account = (props) => {
    const { userData } = useContext(UserContext);
    const history = useHistory();
  
    useEffect(() => {
      if (!userData.user) history.push("/login");
    }, [userData.user, history]);
  
    const deleteUser = async () => {
      let token = localStorage.getItem("auth-token")
      try {
        await API.deleteUser(token)
        await API.deleteConfirm(token)
        history.push("/");
        window.location.reload(false)
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Container>
        <h1>Hello {userData.user?.displayName} this is your account </h1>
        <button onClick={deleteUser}>Delete Account</button>
      </Container>
    );
}

export default Account;
