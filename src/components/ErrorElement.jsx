import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    //   <div>
    //     <h1>Oopsi!!!! May be time to chill😁</h1>
    //   </div>
    // ) || (
    <div>
      <h1>Oopsii!!!</h1>
      <h2> may be I am broke .......... but not you😎</h2>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};

export default ErrorElement;
