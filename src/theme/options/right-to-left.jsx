import { useEffect } from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function RTL({ children, themeDirection }) {
  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

 

  return <>{children}</>;
}

RTL.propTypes = {
  children: PropTypes.node,
  themeDirection: PropTypes.oneOf(['rtl', 'ltr']),
};
