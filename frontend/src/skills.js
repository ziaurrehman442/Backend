import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Skills(props){
    const navigate = useNavigate("");
    const id = (props.id[0]['U_id']);
    const [title,settitle] = useState('');
    const [Level,setLevel] = useState('');
    
    const data = {
        'id':id,
        "title":title,
        "Level": Level,
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
      <th scope="col">Level</th>
    </tr>
    </thead>
    <tbody>{
            data1.map((element) => {
                key+=1;
                return(
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{element.title}</td>
                        <td>{element.level}</td>
                    </tr>
                )
            })
    }
    </tbody>
    </table> 
    <button className="btn btn-primary" onClick={()=>{navigate("/Languages")}}>Submit</button>
  </div>  )
        }
        else{
            return("You have no added skill!");
        }
    }
    function eduseen(){
        axios.post("http://192.168.0.104:8081/getskill/"+id)
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
        axios.post("http://192.168.0.104:8081/addskill/"+JSON.stringify(data))
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
            <label htmlFor="title" className="form-lable">Name</label>
            <input id="title" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <p>Choose Level from List:</p>
            <input type="radio" id="1" name="level" value="1" onChange={(e)=>{setLevel(e.target.value)}}/>
            <label for="1">Level 1</label><br/>
            <input type="radio" id="2" name="level" value="2" onChange={(e)=>{setLevel(e.target.value)}}/>
            <label for="2">Level 2</label><br/>
            <input type="radio" id="3" name="level" value="3" onChange={(e)=>{setLevel(e.target.value)}}/>
            <label for="3">Level 3</label><br/>
            <input type="radio" id="4" name="level" value="4" onChange={(e)=>{setLevel(e.target.value)}}/>
            <label for="4">Level 4</label><br/>
            <input type="radio" id="5" name="level" value="5" onChange={(e)=>{setLevel(e.target.value)}}/>
            <label for="5">Level 5</label><br/>
            
            <button onClick={handleskill} className="btn btn-primary my-3">Add</button>  

            <div className="my-3">
                <h1>Your Added Skills:</h1>
                <Rend/>
            </div>
        </div>
    )
}

export default Skills;