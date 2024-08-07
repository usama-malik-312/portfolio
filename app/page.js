"use client";

import AppFile from ".";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;   

  }
`;
export default function Home() {
  return (
    <div>
    <GlobalStyle />
    <AppFile />
  </div>
  );
}
