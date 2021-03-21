import NavBar from '../../styles/components/NavBar/Menu.css'
import React from 'react'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/">Quarto</a></li>
                <li><a href="/">Paciente</a></li>
                <li><a href="/">Medicação</a></li>
                <li><a href="/">Médico</a></li>
            </ul>
        </nav>
    </aside>
)
 export default Menu