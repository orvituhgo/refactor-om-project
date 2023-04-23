import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({children, isClosed}) {
      const isLoggedIn = true;
    //   const navigate = useNavigate();
  
    return isClosed && isLoggedIn ? children : <Navigate to='/' /> ;
}
    
    PrivateRoute.defaultProps = {
      isClosed: false,
    };
    
    PrivateRoute.propTypes = {
      children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
      isClosed: PropTypes.bool,
    };