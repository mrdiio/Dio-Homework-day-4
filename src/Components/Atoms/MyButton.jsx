import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function MyButton({ style, children, ...props }) {
  return (
    <Button {...props} className={`btn ${style}`}>
      {children}
    </Button>
  );
}

MyButton.propTypes = {
  children: PropTypes.string,
  style: PropTypes.string,
};
