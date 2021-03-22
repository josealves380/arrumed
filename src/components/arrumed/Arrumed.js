import Styles from '../../styles/components/Arrumed.css'
import Menu from '../../widgest/Navbar/index'
import React from 'react'
import Avisos from '../avisos/Avisos'

export default props => (
    <div className='Arrumed'>
        <h1>ArruMed</h1>
        <Menu></Menu>
        <Avisos></Avisos>
    </div>
)