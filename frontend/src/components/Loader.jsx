import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}
    ></Spinner>
  );
};

Loader.defaultProps = {
  animation:'border',
  role:'status',
  style:{ width: '100px', height: '100px', margin: 'auto', display: 'block' }
};
Loader.propTypes = {
  animation:PropTypes.string,
  role:PropTypes.string,
  style:PropTypes.object,
}
export default Loader;
