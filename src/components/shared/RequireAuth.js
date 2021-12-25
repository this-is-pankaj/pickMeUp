import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/use-auth";

// screen if you're not yet authenticated.
const RequireAuth = ({children}) => {
  const auth = useAuth();
  console.log(auth);
  const location = useLocation();
  if(!auth.user.id) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>
    {children}
  </>;
}

export default RequireAuth;