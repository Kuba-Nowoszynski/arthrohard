import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Error from "./routes/error/Error.jsx";
import { TextContextProvider } from "./contexts/TextContext.jsx";

import "./index.scss";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide the TextContext to the application */}
    <TextContextProvider>
      {/* Use ErrorBoundary to handle errors and show the Error component if an error occurs */}
      <ErrorBoundary fallback={<Error />}>
        {/* Provide the router configuration to the application */}
        <RouterProvider router={router}></RouterProvider>
      </ErrorBoundary>
    </TextContextProvider>
  </StrictMode>
);
