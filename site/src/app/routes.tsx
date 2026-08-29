import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Digital from "./pages/Digital";
import Hub from "./pages/Hub";
import Robotics from "./pages/Robotics";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "services", Component: Services },
      { path: "digital", Component: Digital },
      { path: "hub", Component: Hub },
      { path: "robotics", Component: Robotics },
      { path: "impact", Component: Impact },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
