import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.mainBg};
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  ._hover01:hover {
    background-color: ${theme.colors.primaryHover};
  }

  ._hover02:hover, .header__user:hover {
    color: ${theme.colors.primaryHover};
  }
  ._hover02:hover::after, .header__user:hover::after {
    border-left-color: ${theme.colors.primaryHover};
    border-bottom-color: ${theme.colors.primaryHover};
  }

  ._hover03:hover {
    background-color: ${theme.colors.primaryHover};
    color: ${theme.colors.white};
  }
  ._hover03:hover a {
    color: ${theme.colors.white};
  }

  ._orange {
    background-color: ${theme.colors.orange.background};
    color: ${theme.colors.orange.text};
  }

  ._green {
    background-color: ${theme.colors.green.background};
    color: ${theme.colors.green.text};
  }

  ._purple {
    background-color: ${theme.colors.purple.background};
    color: ${theme.colors.purple.text};
  }

  ._gray {
    background: ${theme.colors.gray.background};
    color: ${theme.colors.gray.text};
  }

  ._active-category {
    opacity: 1 !important;
  }

  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid ${theme.colors.primary};
    outline: none;
    background: transparent;
    color: ${theme.colors.primary};
  }
  ._btn-bor a {
    color: ${theme.colors.primary};
  }

  ._btn-bg {
    border-radius: 4px;
    background: ${theme.colors.primary};
    border: none;
    outline: none;
    color: ${theme.colors.white};
  }
  ._btn-bg a {
    color: ${theme.colors.white};
  }

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }
`;