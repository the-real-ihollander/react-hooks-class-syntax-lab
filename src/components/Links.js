import React from "react";

class Links extends React.Component {
  render() {
    const { props } = this;
    return (
      <div>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    );
  }
}

export default Links;
