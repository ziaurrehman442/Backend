import { useEffect, useState } from "react";
import axios from "axios";
import "./templates.css";

function Templates(props){
    const [temp,settemp] = useState('');
    useEffect(()=>{
        axios.get("http://192.168.0.104:8081/templates")
            .then(res => {
                settemp(res.data);
            })
    },[]);
    if(temp!==''){
      return(
        <div className="container">
          <div className="card-group">
          {
            temp.map(element => {
              return(
                <div className="card template" key={element.T_id}>
                <img src={"uploads/"+element.image} className="card-img-top card-1" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal"+element.T_id}>
                      Preview
                    </button>
                    <div className="modal fade" id={"exampleModal"+element.T_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{element.T_id}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <img src={"uploads/"+element.image} className="card-img-top" alt="..."/>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={props.onSet(element.T_id)} className="btn btn-primary mx-3">SELECT</button>
                </div>
            </div> 
        
              )
            })
          }
        </div>
        </div>
    );
  }


}
export default Templates;