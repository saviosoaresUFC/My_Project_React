import './App.css';
import MenuLeft from './components/MenuLeft';
import MenuTop from './components/MenuTop';


function App() {

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

  return (
    <body className="App">
      {/* <MenuTop /> */}
      <MenuLeft />
    </body>
    //    <div className="App">   
    //    <h4>Lista de usuários</h4>
    //     <header className="App-header">
    //        <img src={require('./img/2.jpg')} className="Img" alt="logo" />
    //       <table className='Table'>
    //         <thead>
    //           <tr className='Table-header'>
    //             <th>ID</th>
    //             <th>Nome</th>
    //             <th>E-mail</th>
    //             <th>Salario</th>
    //           </tr>
    //         </thead>
    //         <tbody className='Table-body'>
    //           {data.map((item) => (
    //             <tr key={item.id}>
    //               <td className='Campo-Id'>{item.id}</td>
    //               <td className='Campo-Name'>{item.name}</td>
    //               <td className='Campo-Email'>{item.email}</td>
    //               <td className='Campo-Salario'>{item.salario}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    // <section className='Section'>
    //         <img src={require('./img/1.jpg')} className="Img" alt="logo" />
    //         <img src={require('./img/2.jpg')} className="Img" alt="logo" />
    //         <img src={require('./img/3.jpg')} className="Img" alt="logo" />
    //         <img src={require('./img/4.jpg')} className="Img" alt="logo" />
    //         <img src={require('./img/5.jpg')} className="Img" alt="logo" />
    //         <img src={require('./img/6.jpg')} className="Img" alt="logo" />
    //       </section>
    // </header>
    //   </div>
  );
}

export default App;
