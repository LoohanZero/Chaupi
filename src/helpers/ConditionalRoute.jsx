import { Navigate  } from 'react-router-dom';

const ConditionalRoute = ({ children, user, isLoadingUser, redirectPath = '/'}) => {
  if (isLoadingUser) {
    return <Navigate to={redirectPath} />; // or loading spinner, etc
  }

	return user ? <Navigate to={redirectPath} /> : children;
  };


export default ConditionalRoute;