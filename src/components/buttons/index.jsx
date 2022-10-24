import React from 'react'
import Buttons from './styles'
import { FaWhatsapp } from 'react-icons/fa'
const Button = ({children}) => {
  return (
    <Buttons>{children}<FaWhatsapp className='icon' /></Buttons>
  )
}

export default Button