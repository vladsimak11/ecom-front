import { CartContextProvider } from '@/components/CartContext/CartContext';
import 'normalize.css/normalize.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap');


  :root {
    --default-color: #d3d3d3;
    --main-color: #001f3f;
    --second-color: #e74c3c;
    --main-transition: all 0.2s ease-in-out 0s;
  }

  body {
    background-color: var(--default-color);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 1px; 
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
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
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}
