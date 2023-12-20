import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <container>
      <header>
        <nav className={css.navigation}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </container>
  );
};
