import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./home.css";
import Home from './Home';
import Navbarm from './Navbarm';
import Login from './login';
import Templates from './templets';
import Price from './Price';
import CreateCV from './CreateCV';
import { useState } from 'react';
import Signup from './signup';
import Dashboard from './Dashboard';
import Eduction from './educationForm';


function Mob(){
    const [tid,settid] = useState('');
    const [id,setid] = useState('');
    const [U_id,setU_id] = useState('');
    function Success(element){
        setid(element);
    }
    function signout(){
        setid('');
    }

    
    function set(e){
        settid(e);
    }
    
    function seta(e){
        setU_id(e);
    }

    
    return(
        <div className='Mobile'>
            <BrowserRouter>
                <div className='mobnav'>
                    <Navbarm id={id} logout={signout}/>
                </div>
                <div className='mainm'>
                    <Routes>
                            <Route path='/' element={ <Home/> }></Route>
                            <Route path='/login' element={ <Login id={id} onSuccess={Success}/> }></Route>
                            <Route path='/Templates' element={ <Templates onSet={set}/> }></Route>
                            <Route path='/Price' element={ <Price/> }></Route>
                            <Route path='/CreateCV' element={ <CreateCV onset={seta} id={id}/> }></Route>
                            <Route path='/Education' element={ <Eduction id={U_id}/> }></Route>
                            <Route path='/Sign-up' element={ <Signup id={id}/> }></Route>
                            <Route path='/Dashboard' element={ <Dashboard id={id} />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>          
        </div>
    )
}
export default Mob;