import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";

function Home(props) {
  return (
    <div>
      {props.userData.user ? (
        <Container>
          <h3 className="text-center p-3">
            Welcome {props.userData.user.firstName}
          </h3>
        </Container>
      ) : (
        <Banner
          backgroundImage="https://i.pinimg.com/564x/87/f5/0a/87f50a74c7fe20e185045d65492a9052.jpg"
          title="Welcome Neighbor!"
        ></Banner>
      )}
    </div>
  );
}

export default Home;
