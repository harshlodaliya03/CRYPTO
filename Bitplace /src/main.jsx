import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoincontextProvider from "./context/Coincontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CoincontextProvider>
        <App />
      </CoincontextProvider>
    </BrowserRouter>
  </StrictMode>
);
