import {
  Navigate,
  useRoutes,
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// layouts
import Login from "../pages/Login";

import NotFound from "../pages/NotFound";
import ProductList from "../pages/ProductList";
import { RouterPath } from "./RouterPath";
import DashboardLayout from "../layouts/dashboard";
import Header from "../layouts/Header";
import GlobalLayout from "../layouts/globalLayout";
// import AutomaticLayout from "../pages/automatic/AutomaticLayout";
// import MenualLayout from "../pages/menual/MenualLayout";

// import AccumulatedTime from "../pages/automatic/AccumulatedTime";
// import FermentedDryer from "../pages/menual/FermentedDryer";
// import TimeWashing from "../pages/menual/TimeWashing";
// import HighSeparator from "../pages/menual/HighSeparator";
// import NotificationRecord from "../pages/menual/NotificationRecord";
// import IntegratedPower from "../pages/menual/IntegratedPower";
// import MemberManagement from "../pages/manager/MemberManagement";
// import ManagerNoti from "../pages/manager/ManagerNoti";
// import ManagerHistory from "../pages/manager/ManagerHistory";

// ----------------------------------------------------------------------

// const Router = () => {
//   return useRoutes([
//     // automatic
//     {
//       path: "/dashboard",
//       element: <DashboardLayout />,
//       children: [
//         //automatic
//         { element: <Navigate to="/dashboard/app" replace /> },
//         { path: "app", element: <AutomaticLayout /> },
//         { path: "accumulatedtime", element: <AccumulatedTime /> },
//         // menual
//         { path: RouterPath.MenualLayout, element: <MenualLayout /> },
//         { path: RouterPath.HighSeparator, element: <HighSeparator /> },
//         { path: RouterPath.TimeWashing, element: <TimeWashing /> },
//         { path: RouterPath.FermentedDryer, element: <FermentedDryer /> },
//         {
//           path: RouterPath.NotificationRecord,
//           element: <NotificationRecord />,
//         },
//         { path: RouterPath.IntegratedPower, element: <IntegratedPower /> },
//         // manager
//         { path: RouterPath.MemberManagement, element: <MemberManagement /> },
//         { path: RouterPath.ManagerNoti, element: <ManagerNoti /> },
//         { path: RouterPath.ManagerHistory, element: <ManagerHistory /> },
//       ],
//     },
//     // global
//     {
//       path: "/",
//       element: <Header />,
//       children: [
//         { path: RouterPath.Login, element: <Login /> },
//         { path: RouterPath.ProductList, element: <ProductList /> },
//         { path: "/", element: <Navigate to="/dashboard" /> },
//         { path: "*", element: <Navigate to="/404" /> },
//       ],
//     },
//     { path: RouterPath.AllAdress, element: <Navigate to="/404" replace /> },
//   ]);
// };

// const Wrapper = () => {
//   return (
//     <RouterWrapper>
//       <Router />
//     </RouterWrapper>
//   );
// };

// export default Wrapper;
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardLayout} />

        {/* global */}
        <Route path="/" component={GlobalLayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
