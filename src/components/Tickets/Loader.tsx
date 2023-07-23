import React, { useState, useEffect } from "react";

import "./style.scss";
import Spinner from "../Spinner";

export default function Loader() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div className="ticket-loader">{state && <Spinner />} </div>;
}
