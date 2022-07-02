import Router from "@routers/router";
import "@styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { initNavigation } from "@noriginmedia/react-spatial-navigation";
import GlobalStyles from "@context/theme/global-styles";
initNavigation();
const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyles/>
      <BrowserRouter>
        <div>
          <Router />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
