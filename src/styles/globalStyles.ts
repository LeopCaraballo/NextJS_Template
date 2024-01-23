'use client'

import { createGlobalStyle, css } from 'styled-components'

const globals = css`
  :root {
    --page-background-color: ${props => props.theme.styles?.bodyColor};
    --text-primary-color: ${props => props.theme.styles?.textColor};
    --selection-background-color: var(--text-primary-color);
    --selection-text-color: var(--page-background-color);
  }

  *,
  *::before,
  *::after {
    border: none;
    box-sizing: border-box;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    position: relative;
    vertical-align: baseline;
    transition: all 0.5s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--page-background-color);
    color: var(--text-primary-color);
    font-size: 100%;
    font-style: normal;
    font-weight: 300;
    line-height: 1.45;
    min-height: 100dvh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a,
  strong,
  blockquote,
  i,
  b,
  u,
  em {
    color: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    text-decoration: none;
  }

  a,
  p a {
    color: inherit;
    display: inline;
    font-size: inherit;
    text-decoration: none;
  }

  a {
    display: block;
  }

  ul,
  ol {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  img,
  picture,
  video,
  iframe,
  figure,
  svg {
    display: block;
    object-fit: cover;
    object-position: center center;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  form,
  input,
  textarea,
  select,
  button,
  label {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    color: inherit;
    display: block;
    font-family: inherit;
    font-size: inherit;
  }

  table,
  tr,
  td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-moz-selection {
    background-color: var(--selection-background-color);
    color: var(--selection-text-color);
  }

  ::selection {
    background-color: var(--selection-background-color);
    color: var(--selection-text-color);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      -webkit-animation: none !important;
      -webkit-transition: none !important;
      animation: none !important;
      transition: none !important;
    }

    html {
      scroll-behavior: auto;
    }
  }
`

const GlobalStyle = createGlobalStyle`
  ${globals}
`

export default GlobalStyle
