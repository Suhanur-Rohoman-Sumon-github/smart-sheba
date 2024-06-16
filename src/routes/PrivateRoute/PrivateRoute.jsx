import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useContexts from "../../hooks/useContexts";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContexts();
  const location = useLocation();
  const navigate = useNavigate();

  if (user) {
    return children;
  }
};

export default PrivateRoutes;
