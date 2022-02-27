import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user ? children : <Navigate to='/sign' />
}

export default ProtectedRoute