/* eslint-disable react/prop-types */
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Squares from "../ui/backgrounds/Squares/Squares"; // Importa Squares

const theme = createTheme({
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "4rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    text: {
      primary: "#fff",
    },
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
        <Squares direction="diagonal" speed={0.5} squareSize={40} hoverFillColor='#222' />
      </div>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
