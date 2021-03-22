import Styles from '../../styles/components/Quarto/Quarto.css'
import Menu from '../../widgest/Navbar/index'
import React from 'react'
import Avisos from '../avisos/Avisos'

export default props => (
    <div className='Quarto'>
        <Menu></Menu>
        <h1>ArruMed</h1>
        <Avisos></Avisos>
            
    </div>
)