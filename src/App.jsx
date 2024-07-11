import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    )
  );
  return (
    <div className="w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
