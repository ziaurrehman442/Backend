import { useEffect, useState } from "react";
import axios from "axios";
import "./templates.css";

function Templates(props){
    const [templates,settemplates] = useState('');
    useEffect(()=>{
        axios.get("http://192.168.0.104:8081/templates")
            .then(res => {
                console.log(res);
                settemplates(res);
            })
    },[]);
    if(templates===''){
      console.log(templates);
    return(
        <div className="container">
           {  
              templates.forEach(element => {
                console.log(element);
           })
           }
        </div>
    );
  } 
}
export default Templates;