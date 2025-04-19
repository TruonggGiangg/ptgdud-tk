import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/admin-layout";
import HomeAdmin from "../page/home";
import User from "../page/user";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "", element: <HomeAdmin /> },
      { path: "/user", element: <User /> },
      // { path: "/order", element: <Order /> },
      // { path: "/team", element: <Team /> },
      // { path: "/product", element: <ProductPage /> },
    ],
  },
]);

export default router;
