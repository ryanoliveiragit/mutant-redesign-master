import React,
{
    Fragment,
    useState
}
    from 'react'

import ContainerHeader from './styles'

function Header() {

    return (
        <Fragment>
            <ContainerHeader>
                    <nav className='navigation'>
                        <h1>Sagrado Neon</h1>
                        <ul className='list'>
                        </ul>
                    </nav>
            </ContainerHeader>
        </Fragment>
    )
}

export default Header;