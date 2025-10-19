import {Routes, Route} from 'react-router-dom';
import Home from '../src/vistas/home.jsx';
import Nosotros from './vistas/nosotros.jsx';
import { Link } from 'react-router-dom';


export default function Rutas(){
    return(
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/nosotros' element ={<Nosotros/>}/>

            
        </Routes>
    );
} 