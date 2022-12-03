import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ei jaiga theke code first run hoi . then eita render er moddhe thaka content gula rendar kore
// import Reactdom from ..... ei type er mane holo eita oi library ke akta variable Reactdom variable a convirt kore dicche
//render mane hocche html er theke first a id diye jaiga ta ber kore nibe then oi jaigai eitake render korbe
