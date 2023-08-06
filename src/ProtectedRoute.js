import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'context/UserContext';
import Protected from 'components/Pages/Protected/Protected';

const PrivateRoute = ({ children }) => {
  const { cookies } = useAuth();

  const userToken = cookies.token;
  console.log('userToken', userToken)

  return userToken ? <>{children}</> : <Protected />;
};

export default PrivateRoute;