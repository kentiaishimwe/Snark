import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeWireFrame } from "./screens/HomeWireFrame";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeWireFrame />);
