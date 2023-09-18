import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./home.css";
import Navbard from './Navbar';
import Home from './Home';
import Price from './Price';
import CreateCV from './CreateCV';
import Templates from './templets';
import Login from './login';
import { useState } from 'react';
import Signup from './signup';
import Dashboard from './Dashboard';


function Desk(){
    const [id,setid] = useState('');
    const [tid,settid] = useState('');
    const [file, setFile] = useState(null);
    function Success(element){
        setid(element);
    }
    function signout(){
        setid('');
    }
    function set(e){
        settid(e);
    }
    const handleFileChange = (e) => {
        setFile(e);
        console.log(file);
      };
    return(
        <div className='Desktop'>
            <BrowserRouter>
                <div className='row'>
                    <div className='col-sm-3 navd'>
                        <Navbard id={id}  logout={signout}/>
                    </div>
                    <div className='col-lg-8 maind'>
                        <Routes >
                            <Route path='/' element={ <Home/> }></Route>
                            <Route path='/login' element={ <Login id={id} onSuccess={Success}/> }></Route>
                            <Route path='/Templates' element={ <Templates onSet={set}/> }></Route>
                            <Route path='/Price' element={ <Price/> }></Route>
                            <Route path='/CreateCV' element={ <CreateCV sub={handleFileChange}/> }></Route>
                            <Route path='/Sign-up' element={ <Signup id={id}/> }></Route>
                            <Route path='/Dashboard' element={ <Dashboard id={id} />}></Route>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default Desk;