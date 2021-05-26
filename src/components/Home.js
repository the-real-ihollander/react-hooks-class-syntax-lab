import React from "react";

class Home extends React.Component {
  render() {
    const { props } = this;
    return (
      <div id="home">
        <h1 style={{ color: props.color }}>
          {props.username} is a Web Developer from {props.city}
        </h1>
      </div>
    );
  }
}

export default Home;
