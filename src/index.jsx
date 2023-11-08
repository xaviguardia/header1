import React from "react";
import ReactDOMClient from "react-dom/client";
import { HeaderConfirmationScreen } from "./screens/HeaderConfirmationScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HeaderConfirmationScreen />);
