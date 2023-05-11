import { createGlobalStyle } from 'styled-components';

const HiveGlobal = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  border: none;
}

body {
  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme.colors.dark};
  background:  ${({ theme }) => theme.colors.light};
  overflow-x: hidden;
}
/* ///////////////////////////////////// */
/* General style */

.container {
  width: 80%;
  margin: 0 auto;
}

.profile-picture {
  width: 2.7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
}

.btn {
  display: inline-block;
  padding:  ${({ theme }) => theme.spacing.btnPadding};
  font-weight: 500;
  border-radius:  ${({ theme }) => theme.spacing.borderRadius};
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
}

.btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background:  ${({ theme }) => theme.colors.primary};
  color: #fff;
}

.text-bold {
  font-weight: 500;
}

.text-muted {
  color:  ${({ theme }) => theme.colors.grey};
}

`;

export default HiveGlobal;
