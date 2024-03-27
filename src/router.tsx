import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
])

export default router;