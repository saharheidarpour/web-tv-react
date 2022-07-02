import Router from "@routers/router";
import "@styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Router />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
