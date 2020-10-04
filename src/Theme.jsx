import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#ffffff",
    gray: "#f9fbfc",
    pink: "#f75ca0",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
