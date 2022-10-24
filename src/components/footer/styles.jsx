import styled from "styled-components";

export const FooterStyled = styled.footer`
margin-top: 7%;
  color: white;
  background-color: #1D1D1D;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  .footer {

    display: flex;
  }
  p {
    margin-top: 2%;
    font-size: 12px;
  }
  h1 {
    font-size: 1.5rem;
  }
`
export const Content = styled.div `
    width: 100%;
`
export const MadeWith = styled.div `
    background-color: var(--Primary);
    .footer-copy {
        justify-content: center;
        display: flex;
    }
    .footer-copy-items {
    display: flex;
    width: 100%;
    padding: .5% 5%;
    justify-content: center;
  }
  span {
        margin-left: .2em;
        margin-right: .2em;
    }
  a,p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.76rem;
    margin-left: 8%;
    margin-right: 8%;
    color: var(--Black);
    text-decoration: none;
  }
`