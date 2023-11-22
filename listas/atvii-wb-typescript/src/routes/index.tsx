import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Clientes } from '../pages/Listagem/clientes';
import { Produtos } from '../pages/Listagem/produtos';
import { Servicos } from '../pages/Listagem/servicos';
import { Consumos } from '../pages/Consumos/Consumos';
import { CadastrarClientes } from '../pages/Cadastro/clientes';
import { CadastrarProdutos } from '../pages/Cadastro/produtos';
import { CadastrarServico } from '../pages/Cadastro/servicos';
import { EditarCliente } from '../pages/Editar/clientes';
import { EditarProduto } from '../pages/Editar/produtos';
import { EditarServico } from '../pages/Editar/servicos';
import { Component } from 'react';

export class  AppRoutes extends Component {
    render(){

        return (
            <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/consumos' element={<Consumos/>}/>
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>
                <Route path='/editar_cliente/1' element={<EditarCliente/>}/>
                <Route path='/editar_produto/1' element={<EditarProduto/>}/>
                <Route path='/editar_servico/1' element={<EditarServico/>}/>
            </Routes>
        </Router>
    );
}
}