import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  return (
    <div>
      {props.userData.user ? (
        <h3 className="text-center p-3">
          Welcome {props.userData.user.firstName}
        </h3>
      ) : (
        <Banner
          backgroundImage="https://i.pinimg.com/564x/87/f5/0a/87f50a74c7fe20e185045d65492a9052.jpg"
          title="Welcome"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          neque consequuntur"
        ></Banner>
      )}
    </div>
  );
}

export default Home;
