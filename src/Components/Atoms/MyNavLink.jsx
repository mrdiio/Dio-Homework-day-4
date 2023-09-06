import PropTypes from 'prop-types';
import { NavLink } from 'react-bootstrap';

export default function MyNavLink({ children, ...props }) {
  return (
    <NavLink {...props} className="nav-link">
      {children}
    </NavLink>
  );
}

MyNavLink.propTypes = {
  children: PropTypes.node,
};
