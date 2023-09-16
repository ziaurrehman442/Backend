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
          <div class="card-group">
          {
            temp.map(element => {
              return(
                <div class="card template">
                <img src={"uploads/"+element.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Preview
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Template1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <img src="uploads/cv.jpg" class="card-img-top" alt="..."/>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={props.onSet()} class="btn btn-primary mx-3">SELECT</button>
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