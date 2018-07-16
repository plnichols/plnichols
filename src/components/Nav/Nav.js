import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyled, NavItemStyled } from './Nav.styles';

const Nav = () => {
  return (
    <NavStyled>
      <NavItemStyled>
        <Link to="/">Home</Link>
      </NavItemStyled>
      <NavItemStyled>
        <Link to="/styleguide">Style Guide</Link>
      </NavItemStyled>
      <NavItemStyled>
        <Link to="/topics">Topics</Link>
      </NavItemStyled>
    </NavStyled>
  );
};

export { Nav };
