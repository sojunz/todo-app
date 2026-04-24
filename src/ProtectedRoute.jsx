import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}
