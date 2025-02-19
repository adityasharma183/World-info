import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css"

import { AppLayout } from "./components/Layouts/AppLayout";


import {Home} from "./pages/Home"
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { CountryDetails } from "./components/Layouts/CountryDetails";

import { ErrorPage } from "./pages/Errorpage";
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"/",
      element:<Home/>,
    },
    {
      path:"about",
      element:<About/>,
    },
    {
      path:"country",
      element:<Country />,
    },
    {
      path: "country/:id",
      element: <CountryDetails />,
    },
    {
      path:"contact",
      element:<Contact/>,
    },]
  }
]);
const App = () =>{
  return(
    <RouterProvider router={router}></RouterProvider>
  );
  
}
export default App;