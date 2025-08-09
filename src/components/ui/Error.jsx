import React from "react";

const Error = ({ error }) => {
  return (
    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
      {error}
    </div>
  );
};

export default Error;
