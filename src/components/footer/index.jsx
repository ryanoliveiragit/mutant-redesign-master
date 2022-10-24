import React, { Fragment } from 'react'
import { FooterStyled, Content, MadeWith } from './styles'
import Layout from '../layout'

const Footer = ({cnpj, endereco, tell, fantasyName}) => {
  return (
    <Fragment>
      <FooterStyled>
        <Layout>
          <div className="footer">
            <Content>
              <h1>{fantasyName}</h1>
              <p>
                {endereco}
              </p>
              <p>Telefone: {tell}</p>
            </Content>
          </div>
        </Layout>
      </FooterStyled>
      <MadeWith>
        <div className="footer-copy">
          <div className="footer-copy-items">
            <a href="#">Políticas de Privacidade</a>
            <p>{cnpj}</p>
            <p><span>Made</span>
              <span>by MutantWhats</span>
            </p>
          </div>
        </div>
      </MadeWith>
    </Fragment>
  )
}

export default Footer