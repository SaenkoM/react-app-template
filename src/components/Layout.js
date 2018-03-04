import React from 'react';
import PropTypes from 'prop-types';
import { defaultMessage } from './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={defaultMessage}>webpack-app-template</h1>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;