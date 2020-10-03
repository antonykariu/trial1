import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
