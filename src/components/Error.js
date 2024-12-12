import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error?.message || "An unknown error occurred."}</p>
    </div>
  );
};

export default Error;
