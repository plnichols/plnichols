import { css } from 'styled-components';

export const color = {
  text: '#f1fbff',
  grey: '#aaa',
  lightGrey: '#ddd',
  darkGrey: '#666',
  primary: {
    base: '#01579b',
    light: '#4f83cc',
    dark: '#002f6c',
    l50: '#e1f5fe',
    l100: '#b3e5fc',
    l200: '#81d4fa',
    l300: '#4fc3f7',
    l400: '#29b6f6',
    l500: '#03a9f4',
    l600: '#039be5',
    l700: '#0288d1',
    l800: '#0277bd'
  },
  secondary: {
    base: '#c51162',
    light: '#bc477b',
    dark: '#560027',
    l50: '#fce4ec',
    l100: '#f8bbd0',
    l200: '#f48fb1',
    l300: '#f06292',
    l400: '#ec407a',
    l500: '#e91e63',
    l600: '#d81b60',
    l700: '#c2185b',
    l800: '#ad1457'
  }
};

export const font = {
  base: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'serif',
  monospace: 'monospace'
};

export const media = {
  up: {
    xxs: (...args) => css`
      @media (min-width: 0px) {
        ${css(...args)};
      }
    `,
    xs: (...args) => css`
      @media (min-width: 576px) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (min-width: 992px) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (min-width: 1200px) {
        ${css(...args)};
      }
    `
  },
  down: {
    xxs: (...args) => css`
      @media (max-width: 0px) {
        ${css(...args)};
      }
    `,
    xs: (...args) => css`
      @media (max-width: 575px) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (max-width: 767px) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (max-width: 991px) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (max-width: 1199px) {
        ${css(...args)};
      }
    `
  },
  print: (...args) => css`
    @media print {
      ${css(...args)};
    }
  `
};
