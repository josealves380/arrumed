import NavBar from '../../styles/components/NavBar/Menu.css'
import React from 'react'

import { Link} from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/Quarto">Quarto</Link></li>
                <li><Link to="/Paciente">Paciente</Link></li>
                <li><Link to="/Medicacao">Medicação</Link></li>
                <li><Link to="/Medico">Médico</Link></li>
                <li><Link to="/Itens">Itens</Link></li>
                <li><Link to="/Liberacao">Liberação</Link></li>
            </ul>
        </nav>
    </aside>
)
 export default Menu