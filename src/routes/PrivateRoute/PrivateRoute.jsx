import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useContexts from "../../hooks/useContexts";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContexts();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace navigate={navigate} />
  );
};

export default PrivateRoutes;
