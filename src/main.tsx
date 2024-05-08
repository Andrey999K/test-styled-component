import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas, serif;
  }
`;

const theme = {
  colors: {
    primary: "green",
    secondary: "red"
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)"
  }
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
