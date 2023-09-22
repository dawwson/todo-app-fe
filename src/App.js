import { useRoutes } from "react-router-dom";

import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import NotFoundPage from "./pages/NotFound";

function App() {
  const routes = useRoutes([
    {
      path: "/*",
      element: <NotFoundPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return routes;
}

export default App;
