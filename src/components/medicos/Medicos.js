import React from 'react'
import Menu from '../../widgest/Navbar/index'

export default props =>( 
    <div>
        <Menu />
        <h1>Cadastro de Médicos</h1>
            <div>
                <input type="text" placeholder="Informe nome do Médico"></input>
            </div>
            <div>
                <input type="text" placeholder="Informe qual especialidade que possui o médico"></input>
            </div>
    </div>
)