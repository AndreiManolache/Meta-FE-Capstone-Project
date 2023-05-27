import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import '@fontsource/markazi-text/400.css';
import '@fontsource/markazi-text/500.css';
import '@fontsource/markazi-text/600.css';
import '@fontsource/markazi-text/700.css';
import '@fontsource/poppins';

const theme = extendTheme(
  {
    fonts: {
      heading: `'Markazi Text', sans-serif`,
      body: `'Poppins', sans-serif`
    },
    colors: {
      brand: {
        primary: "#495e57",
        secondary: "#f4ce14",
      }
    },
    components: {
      defaultProps: {
        colorScheme: "secondary"
      }
    }
  },
  withDefaultColorScheme({ colorScheme: "colors" })
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
