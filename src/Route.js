import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Arrumed from './components/arrumed/Arrumed'
import Itens from './components/Itens/itens'
import Liberacao from './components/liberacao/Liberacao'
import Medicos from './components/medicos/Medicos';
import Paciente from './components/paciente/Paciente';
import Quarto from './components/Quarto/Quarto'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Arrumed}></Route>
                <Route path="/Quarto">
                    <Quarto />
                </Route>
                <Route path="/itens">
                    <Itens />
                </Route>
                <Route path="/Liberacao">
                    <Liberacao/>
                </Route>
                <Route path="/Paciente">
                    <Paciente />
                </Route>
                <Route path="/Medicos">
                    <Medicos />
                </Route>
            </Switch>
        </BrowserRouter>
);
    }