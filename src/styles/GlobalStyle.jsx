import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` //Styled global App

:root {
    --Primary: #e9e9e9;
    --Secondary: #3AFC8A;
    --SecondaryHover: #33e07b;
    --text: #393939;
}
* {
    margin: 0;
    box-sizing: border-box; //faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura.
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    font-family: 'Lexend', sans-serif!important;
    scrollbar-width: auto;
    scrollbar-color: var(--Primary);
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }
  *::-webkit-scrollbar-track {
    background: #d3d3d3;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #282828;
    border: 1px solid #282828;
  }
body {
  font-family: 'Lexend', sans-serif!important;
    background-color: var(--Primary);
}
.servicos {
  margin-top: 3%;
  font-family: 'Lexend';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
align-items: center;
text-align: center;

color: #000000;
  width: 50%;
  margin-left: 25%;
}
`
export default GlobalStyle;