import React from 'react'
import './Styles/TabelaStyle.css'
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Tabela = () => {

    const formatedValue = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });


    const data = [
        {
            id: 1,
            name: 'Caio Carvalho',
            email: 'caiosoares@gmail.com',
            salario: formatedValue.format(1000),
        },
        {
            id: 2,
            name: 'Savio Carvalho',
            email: 'saviosoares@gmail.com',
            salario: formatedValue.format(2000),
        },
        {
            id: 3,
            name: 'Rayssa Maria',
            email: 'raysonamaria@gmail.com',
            salario: formatedValue.format(3000),
        },
    ];

    const [key, setKey] = React.useState("bar");

    return (
        <div className="body">
            <div className="tittle">
                <h2>Lista de usuários</h2>
            </div>
            <div className="viewImg">
                <img src={require('../img/2.jpg')} className="img" alt="logo" />
            </div>
            <div className="viewTable">
                <Table className='table' responsive='sm' striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className='Campo-Id'>{item.id}</td>
                                <td className='Campo-Name'>{item.name}</td>
                                <td className='Campo-Email'>{item.email}</td>
                                <td className='Campo-Salario'>{item.salario}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Tabela