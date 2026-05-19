import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "services", Component: Services },
      { path: "impact", Component: Impact },
      { path: "contact", Component: Contact },
      { path: "*", Component: Home },
    ],
  },
]);
