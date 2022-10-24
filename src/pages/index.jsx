/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import GlobalStyle from '../styles/GlobalStyle'
import React, { Fragment } from 'react'
import Header from '../components/header'
import Title from '../components/Title'
import Layout from '../components/layout'
import ConatactWpp from '../components/StartContact'
import Page from '../components/SEO/page'
import Button from '../components/buttons'
import { IoIosArrowDown } from 'react-icons/io'
import Servicos from '../components/servicos'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Fragment>
      <Page title="Sagrado Neon" description="Sagrado Neon" path="/">
        <Layout>
          <Header />
          <Title
            fantasyName="Hemy"
            cnpj="ANDREIA APARECIDA DA SILVA MORENO"
            cnpjNum="12630245802"
            fantasyNameStyled="fantasyName"
          />
          <Button>
            Começar uma conversa
          </Button>
          <ConatactWpp />
          <IoIosArrowDown
            fill='#B0B0B0'
            size={50}
          />
          <Servicos />
          <p
            className='servicos'
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum itaque sequi explicabo enim eligendi quo tenetur vitae aspernatur quod odit animi sed neque, id minima veritatis cupiditate, nam, beatae error!
          </p>
          <Button>
            Solicite um orçamento
          </Button>
        </Layout>
        <Footer
          cnpj="Hemy"
          endereco="Endereço: R GUARAITA, 1437, VILA CURUCA - São Paulo - SP"
          tell="(11) 1656-6845"
          fantasyName="Sagrado Neon"
        />
        <GlobalStyle />
      </Page>
    </Fragment>
  )
}
