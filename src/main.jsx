import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import BlogDtls from "./pages/BlogDtls";
import EventDetls from "./EventDetls";
import Register from "./pages/Register";
import AuthProvider from "./AuthProvider";
import XLogin from "./pages/XLogin";
import VolunteerLogin from "./pages/VolunteerLogin";
import CommunityLogin from "./pages/CommunityLogin";
import ModeratorLogin from "./pages/ModeratorLogin";
import VProfile from "./pages/VProfile";
import PrivateRoute from "./PrivateRoute";
import CProfile from "./pages/CProfile";
import AddBlog from "./pages/AddBlog";
import AddEvent from "./pages/AddEvent";
import MProfile from "./pages/MProfile";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/events", element: <Events /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog_details", element: <BlogDtls /> },
      { path: "/event_details", element: <EventDetls /> },
      { path: "/login", element: <XLogin /> },
      { path: "/volunteer_login", element: <VolunteerLogin /> },
      { path: "/community_login", element: <CommunityLogin /> },
      { path: "/moderator_login", element: <ModeratorLogin /> },
      { path: "/register", element: <Register /> },
      { path: "/volunteer_profile", element: <PrivateRoute><VProfile /></PrivateRoute> },
      { path: "/community_profile", element: <PrivateRoute><CProfile /></PrivateRoute> },
      { path: "/moderator_profile", element: <PrivateRoute><MProfile /></PrivateRoute>, loader: () => fetch('https://volunteers-hub-server.vercel.app/blog') },
      { path: "/volunteer/publish_blog", element: <PrivateRoute><AddBlog /></PrivateRoute> },
      { path: "/community/publish_event", element: <PrivateRoute><AddEvent /></PrivateRoute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);