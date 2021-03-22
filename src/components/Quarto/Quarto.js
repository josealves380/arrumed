import React from 'react'
import Menu from '../../widgest/Navbar/index'
import Styles from '../../styles/components/Quarto/Quarto.css'


function Quarto() {
    return (
        <div>
            <div className='container'>
                <Menu />
                <form>
                    <div className='Quarto'>
                        <div>
                            <label>Número do Quarto</label>
                            <input type="text" placeholder="Digite o número do quarto"></input>
                        </div>
                        <div className='Leito'>
                            <label>Número do leito</label>                   
                            <input type="text" placeholder="Informe número do leito"></input>
                        </div>
                        <div>
                            <label className='Paciente'>Nome do Paciente</label>                   
                            <input type="text" placeholder="Informe o Nome do Paciente"></input>
                        </div>
                        <div>
                            <label className='Paciente'>Medicação Aplicada</label>                   
                            <input type="text" placeholder="Informe a medicação"></input>
                        </div>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Quarto