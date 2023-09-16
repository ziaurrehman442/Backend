import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";

function Navbard(props){
    const [toggle, settoggle]= useState(false);
      setTimeout(() => {
        if(props.id!==''){
          settoggle(true);
        }else{
          settoggle(false);
        } 
      }, 100);
      
      clearTimeout();
    return(
        <nav className="nav flex-column">
          
            <Link to="/" className="navbar-brand n"><h3 align="center">CV MAKER</h3></Link>
            
            <div className="nav-item">
            <Link to="/" className="nav-link" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><polygon points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74"/></svg> Home</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224Z"/><path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z"/></svg> CV
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Templates" >Templates</Link></li>
                  <li><Link className="dropdown-item" to="/CreateCV" >Create CV</Link></li>
                </ul>
              </li>
            </ul>
                <Link to="/Price" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><path d="M288,16,0,304,176,480,464,192V16Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,368,144Z"/><polygon points="480 64 480 208 216.9 471.1 242 496 512 224 512 64 480 64"/></svg> Pricing</Link>
              {toggle && 
                <div>
                  <Link to='/Dashboard' className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><path d="M160,240H320V96a16,16,0,0,0-16-16H64A16,16,0,0,0,48,96V416a16,16,0,0,0,16,16H304a16,16,0,0,0,16-16V272H160Z"/><path d="M459.31,244.69,368,153.37,345.37,176l64,64H320v32h89.37l-64,64L368,358.63l91.31-91.32a16,16,0,0,0,0-22.62Z"/></svg>Dashboard</Link>
                  <Link onClick={props.logout} className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><path d="M160,240H320V96a16,16,0,0,0-16-16H64A16,16,0,0,0,48,96V416a16,16,0,0,0,16,16H304a16,16,0,0,0,16-16V272H160Z"/><path d="M459.31,244.69,368,153.37,345.37,176l64,64H320v32h89.37l-64,64L368,358.63l91.31-91.32a16,16,0,0,0,0-22.62Z"/></svg>logout</Link>
                </div>    
              }{!toggle &&
                <Link to="/login" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 30 512 512"><path d="M432,80H192a16,16,0,0,0-16,16V240H329.37l-64-64L288,153.37l91.31,91.32a16,16,0,0,1,0,22.62L288,358.63,265.37,336l64-64H176V416a16,16,0,0,0,16,16H432a16,16,0,0,0,16-16V96A16,16,0,0,0,432,80Z"/><rect x="64" y="240" width="112" height="32"/></svg>Login</Link>
              }
            </div>
        </nav>
    )
}
export default Navbard;