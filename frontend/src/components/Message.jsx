import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};
Message.defaultProps = {
  variant: 'info',
  children: 'There was an error please report this to the admin.',
};

Message.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
};

export default Message;
