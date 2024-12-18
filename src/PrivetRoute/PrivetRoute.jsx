import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>; // Replace with a spinner or loading indicator as needed
  }

  // If user is authenticated, render children
  if (user) {
    return children;
  }

  // Redirect to login if not authenticated
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
