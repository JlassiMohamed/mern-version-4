import React from "react";
import errors from "../../assets/img-error.jpg";

const Errors = ({ history }) => {
  return (
    <div>
      <img src={errors} alt="errors" />
      <br />
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Errors;
