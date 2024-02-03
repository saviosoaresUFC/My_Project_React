import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Auxilios from './pages/Auxilios';
import Bolsas from './pages/Bolsas';
import Editais from './pages/Editais';
import Home from './pages/Home';
import Intranet from './pages/Intranet';
import Servicos from './pages/Servicos';
import Informations from './components/Informations';


function App() {
  return (
    <>
      <NavBar />
      {/* <Informations /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auxilios" element={<Auxilios />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/editais" element={<Editais />} />
        <Route path="/intranet" element={<Intranet />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </>
  );
}

export default App;
