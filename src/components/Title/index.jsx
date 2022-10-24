import React, { Fragment } from 'react'
import { Text, Container } from './styles'

const Title = ({ cnpj, fantasyName, fantasyNameStyled, cnpjNum}) => {
    return (
        <Fragment>
            <Container>
                <Text>{fantasyName}</Text>
                <Text className={fantasyNameStyled}>{cnpj} <b>{cnpjNum}</b></Text>
            </Container>
        </Fragment>
    )
}

export default Title