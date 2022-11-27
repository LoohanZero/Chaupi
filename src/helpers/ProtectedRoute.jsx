import { Navigate  } from 'react-router-dom';

const ProtectedRoute = ({ children, user, isLoadingUser, redirectPath = '/login'}) => {
  
  if (isLoadingUser) {
    return null; // or loading spinner, etc
  }

	return user ? children : <Navigate to={redirectPath} />;
  };


export default ProtectedRoute;