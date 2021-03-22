import React from 'react'
import Menu from '../../widgest/Navbar/index'

export default props =>( 
    <div>
        <Menu />
        <h1>Liberação da Medicação</h1>
        
            <div>
            <input type="text" placeholder="Informe o nome do Médico que liberou a medicação"></input>
            </div>
    </div>
)