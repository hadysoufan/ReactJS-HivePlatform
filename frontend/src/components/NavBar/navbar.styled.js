import styled from 'styled-components';

/* ////////////////////// */
/* Header Section */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  width: 100%;
  padding: 0 4.8rem;
  position: relative;
  background: ${({ theme }) => theme.colors.backGround};

  .logo {
    width: 40rem;
    height: 35rem;
    margin-top: 7rem;
    padding-bottom: 1.4rem;
    cursor: pointer;
  }
`;

/* ////////////////////// */
/* Nav Section */
export const MainNav = styled.nav`
  width: auto;
  margin: 0 auto;

  .main-nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .main-nav-link {
    &:link {
      display: inline-block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.button};
      font-size: 1.8rem;
      transition: all 0.4s;
    }
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.button};
      font-size: 1.8rem;
      transition: all 0.4s;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.active};
    }
    &:active {
      color: ${({ theme }) => theme.colors.active};
    }
  }
  .home-btn {
    margin-top: 1rem;
  }
  .main-nav-line {
    width: 1px;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.button};
    margin: 0 2rem;
  }
  .btn-login {
    font-family: inherit;
    font-size: 1.7rem;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: ${({ theme }) => theme.colors.button};
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    a {
      color: ${({ theme }) => theme.colors.button};
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.2rem;
      width: 0;
      background-color: ${({ theme }) => theme.colors.button};
      transition: 0.5s ease;
    }
    &:hover {
      color: #0f0e17;
      transition-delay: 0.5s;
      &::before {
        width: 100%;
      }
      &::after {
        height: 100%;
        transition-delay: 0.4s;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.button};
      transition: 0.4s ease;
      z-index: -1;
    }
  }
`;
