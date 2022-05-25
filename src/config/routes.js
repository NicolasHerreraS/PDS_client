import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import AdminHome from "../pages/admin";
import AdminSignIn from "../pages/admin/signIn";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import contact from "../pages/contact";

const routesAdmin = [
  {
    path: "/admin",
    Layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    Layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

const routesClient = [
  {
    path: "/",
    Layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    Layout: LayoutBasic,
    component: contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    Layout: LayoutBasic,
    component: NotFound,
  },
];
const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;
