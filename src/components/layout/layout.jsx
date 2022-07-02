import React from "react";
import { Container } from "./style";
import PropTypes from "prop-types";
import Menu from "@components/menu";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContextProvider } from "@context/theme";
function Layout({ hasMenu = true, children }) {
  return (
    <ThemeContextProvider>
      <Container>
        {hasMenu && <Menu />}
        {children}
        <Outlet />
      </Container>
    </ThemeContextProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasMenu: PropTypes.bool,
};

export default Layout;
