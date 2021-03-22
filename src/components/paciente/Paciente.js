import React from 'react'
import Menu from '../../widgest/Navbar/index'

export default props =>( 
    <div>
        <Menu />
        <h1>Paciente</h1>
            <div>
                <input type="text" placeholder="Informe nome do paciente"></input>
            </div>
            <div>
                <input type="text" placeholder="Informe qual motivo que o paciente vai utilizar esse remédio"></input>
            </div>
    </div>
)