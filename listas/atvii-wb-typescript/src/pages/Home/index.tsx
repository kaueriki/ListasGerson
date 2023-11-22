/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import Navbar_ from '../../component/NavBar';
import './styles.css'

export class Home extends Component {
    render(){

        return (
            <section>
           <header>
               <Navbar_/>
           </header>
           <main>
               <div className="text">
                   <h1>Bem vindo ao site do Salão WB!</h1>
                    <h2>Aqui você poderá fazer o controle de Clientes, Produtos, Serviços e o consumo dos clientes</h2>
               </div>
           </main>
       </section>
    );
}
}