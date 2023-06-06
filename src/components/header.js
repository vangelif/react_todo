import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

const Header = ({ children }) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      {children}
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
};
Header.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Header;
