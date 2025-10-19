import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import Rutas from './rutas.jsx'
import Nav from './componentes/nav.jsx'
import Footer from './componentes/footer.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <- esto incluye Popper y JS





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav/>
      <Rutas/>
      <Footer/>

      
    </BrowserRouter>
      
    
  </StrictMode>
);
