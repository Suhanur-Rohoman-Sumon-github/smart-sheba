import { createBrowserRouter } from "react-router-dom";
import DashboardLaouts from "../layouts/DashboardLaouts";
import App from "../App";
import CreateNid from "../pages/Dashboard/createNid/CreateNid";
import SingnCopy from "../pages/Dashboard/signToServerCopy/SingnCopy";
import ServerCopy from "../pages/Dashboard/serverCopy/ServerCopy";
import NidCard from "../pages/Dashboard/nidCard/NidCard";
import ServerCopyUnoficial from "../pages/Dashboard/serverCopyUnoficial/ServerCopyUnoficial";
import Bayometric from "../pages/Dashboard/baymetric/Bayometric";
import CallList from "../pages/Dashboard/callList/CallList";
import NameCurrection from "../pages/Dashboard/nameCurrection/NameCurrection";
import Bekash from "../pages/Dashboard/bakashInfo/Bekash";
import Nogod from "../pages/Dashboard/nogod/Nogod";
import BkashPin from "../pages/Dashboard/bakshPinReset/BkashPin";
import NameAndAdrees from "../pages/Dashboard/NameAndAdrees/NameAndAdrees";
import FileList from "../pages/Dashboard/fileList/FileList";
import Recharge from "../pages/Dashboard/recharge/Recharge";
import Sinup from "../pages/LoginAndSinup/sinup/Sinup";
import Logins from "../pages/LoginAndSinup/login/Logins";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";
import RechargeComponnets from "../componnets/RechargeComponnets";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import AdminPaymentRequests from "../pages/Dashboard/admin/AdminPaymentRequests";
import Tika from "../pages/Dashboard/Tika/Tika";
import Surokkha from "../pages/Dashboard/surikkha/Surokkha";
import AdminRequests from "../pages/Dashboard/admin/AdminRequests";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLaouts />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/create-nid",
        element: <CreateNid />,
      },
      {
        path: "/dashboard/sign-copy",
        element: <SingnCopy />,
      },
      {
        path: "/dashboard/server-copy",
        element: <ServerCopy />,
      },
      {
        path: "/dashboard/nid-card",
        element: <NidCard />,
      },
      {
        path: "/dashboard/server-copy-unofficial",
        element: <ServerCopyUnoficial />,
      },
      {
        path: "/dashboard/bayometric",
        element: <Bayometric />,
      },
      {
        path: "/dashboard/call-list",
        element: <CallList />,
      },
      {
        path: "/dashboard/name-correction",
        element: <NameCurrection />,
      },
      {
        path: "/dashboard/bkash-info",
        element: <Bekash />,
      },
      {
        path: "/dashboard/nogod-info",
        element: <Nogod />,
      },
      {
        path: "bkash-pin-reset",
        element: <BkashPin />,
      },
      {
        path: "/dashboard/name-address",
        element: <NameAndAdrees />,
      },
      {
        path: "/dashboard/file-list",
        element: <FileList />,
      },
      {
        path: "/dashboard/recharge",
        element: <Recharge />,
      },
      {
        path: "/dashboard/sendRequest",
        element: <RechargeComponnets />,
      },
      {
        path: "/dashboard/home",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/payment-requests",
        element: <AdminPaymentRequests />,
      },
      {
        path: "/dashboard/tika",
        element: <Tika />,
      },
      {
        path: "/dashboard/nibondhon",
        element: <Surokkha />,
      },
      {
        path: "/dashboard/requests",
        element: <AdminRequests />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Logins />,
      },
      {
        path: "/sinup",
        element: <Sinup />,
      },
    ],
  },
]);

export default router;
