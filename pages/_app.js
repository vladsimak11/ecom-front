import 'normalize.css/normalize.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

  body {
    background-color: #d3d3d3;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 1px; 
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
