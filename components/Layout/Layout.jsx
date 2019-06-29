import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import s from './Layout.scss';

function Layout({ hero, children }) {
  return (
    <div className={s.root}>
      <Header>{hero}</Header>
      <main>
        {children}
      </main>
      <footer>
        <span>Company Name</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
