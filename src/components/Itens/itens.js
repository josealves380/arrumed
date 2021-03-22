import React from 'react'
import Menu from '../../widgest/Navbar/index'

export default props => ( 
    <div>
        <Menu />
        <h1>Cadastro de Produtos</h1>
        <div>
            <input type="text" placeholder="Informe qual medicação será cadastrada"></input>
        </div>
    </div>
)