import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import Mob from './Mob';
import Desk from './Desk';
import { useEffect, useState } from 'react';


function App() {
    const [device,setdevice] = useState('');
    function myfunction(){
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
           setdevice(true);
        } else {
          setdevice(false);
        }
    }
    useEffect(()=>{
      myfunction();
    },[])
  return (
    <div className="App">
      {device &&
        <Mob/>
      }
      {!device &&
        <Desk/>
      }
    </div>
  )}
export default App;