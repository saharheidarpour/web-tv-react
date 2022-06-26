import React from "react";
import Router from "@routers/router";
import ReactDOM from "react-dom";
import "@styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { initNavigation } from "@noriginmedia/react-spatial-navigation";

initNavigation();
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
