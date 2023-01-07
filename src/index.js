import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
      domain="dev-sgmtgzo0iywmbpn1.us.auth0.com"
      clientId="Fiond1dUJ6w6S9miEALO1RA6xNtVnxji"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
);
reportWebVitals();
