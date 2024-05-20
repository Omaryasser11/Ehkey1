import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => { // Capitalized 'children'
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />; // Return the Navigate component
    }
    return children; // Capitalized 'children'
}

export default RequireAuth;
