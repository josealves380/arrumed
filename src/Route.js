import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Arrumed from './components/arrumed/Arrumed'
import Itens from './components/Itens/itens'
import Liberacao from './components/liberacao/Liberacao'
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
            </Switch>
        </BrowserRouter>
);
    }