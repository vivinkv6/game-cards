import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Loader from "./components/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
