import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Languages(props){
    const navigate = useNavigate("");
    const id = (props.id[0]['U_id']);
    const [title,settitle] = useState('');
    
    const data = {
        'id':id,
        "title":title
    }
    const [data1,setdata1] = useState('');
    eduseen();
    function Rend(){
        var key = 0;
        if(data1.length!==0){
            return(<div>
            <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
    </tr>
    </thead>
    <tbody>{
            data1.map((element) => {
                key+=1;
                return(
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{element.title}</td>
                    </tr>
                )
            })
    }
    </tbody>
    </table> 
    <button className="btn btn-primary" onClick={()=>{navigate("/Experiance")}}>Submit</button>
  </div>  )
        }
        else{
            return("You have no added skill!");
        }
    }
    function eduseen(){
        axios.post("http://192.168.0.104:8081/getlanguage/"+id)
        .then(res => {
            if (res.status===200){
                setdata1(res.data); 
            }
        })
        .catch(err =>{
          alert("Please File All The Input Filleds! & also Check Your Internet Connection!");
          console.log(err);
        })
    }
    function handleskill(){
        axios.post("http://192.168.0.104:8081/addlanguage/"+JSON.stringify(data))
        .then(res => {
            if (res.status===200){
              console.log(res);
              eduseen();
            }
        })
        .catch(err =>{
          console.log(err);
        })
    }

    return(
        <div>
            <h1>Add Your Skills!</h1>
            <label htmlFor="title" className="form-lable">Language Name</label>
            <input id="title" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            
            <button onClick={handleskill} className="btn btn-primary my-3">Add</button>  

            <div className="my-3">
                <h1>Your Added Skills:</h1>
                <Rend/>
            </div>
        </div>
    )
}

export default Languages;