// NavbarStyleId.jsx
import styled from 'styled-components';

export const NavbarStyleId = styled.nav`
  background-color: black;
  padding: 1rem 2rem;

  .navbar-brand {
    color: white;
    &:hover {
      color: #f8f9fa;
    }
  }

  .navbar-toggler {
    border-color: transparent;
  }

  

  .navbar-nav .nav-link {
    color: white;
    margin-right: 1rem;
    &:hover {
      color: #f8f9fa;
    }
  }

  .custom-button {
    margin-left: 1rem;
    border-color: red;
    color: red;
    &:hover {
      background-color: red;
      color: white;
    }
  }
`;