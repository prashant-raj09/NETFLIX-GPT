import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  //--------------- Redirect user  Start ------------

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  //--------------- Redirect user  End ------------

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;