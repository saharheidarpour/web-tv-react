import PropTypes from "prop-types";
import React, { useReducer } from "react";
import AuthContext from "./auth-context";

const DEFAULT_VALUE = {
  authPageState: "welcome",
};

function reducer(state, action) {
  switch (action.type) {
    case "welcome":
      return {
        ...state,
        authPageState: welcome,
      };
    case "enterPhone":
      return {
        ...state,
        authPageState: "enterPhone",
      };
    case "enterCode":
      return {
        ...state,
        authPageState: "enterCode",
      };
    case "reset":
      return { ...DEFAULT_VALUE, ...action.payload };
    default:
      throw new Error();
  }
}

const AuthProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
});

AuthProvider.displayName = "AuthProvider";
AuthProvider.defaultProps = {
  children: null,
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
