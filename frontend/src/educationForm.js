import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Eduction(props){
    const navigate = useNavigate("");
    const id = (props.id[0]['U_id']);
    const [title,settitle] = useState('');
    const [passyear,setpassyear] = useState('');
    const [Institute,setinstitute] = useState('');
    const institute1 = Institute.replaceAll('/', '@');
    
    const data = {
        'id':id,
        "title":title,
        "passyear": passyear,
        "Institute": institute1
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
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>{
            data1.map((element) => {
                key+=1;
                return(
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{element.title}</td>
                        <td>{element.institute}</td>
                        <td>{element.year}</td>
                    </tr>
                )
            })
    }
    </tbody>
    </table> 
    <button className="btn btn-primary" onClick={()=>{navigate("/Skills")}}>Submit</button>
  </div>  )
        }
        else{
            return("You have no added education!");
        }
    }
    function eduseen(){
        axios.post("http://192.168.0.104:8081/getedu/"+id)
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
    function handleeducation(){
        axios.post("http://192.168.0.104:8081/addedu/"+JSON.stringify(data))
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
            <h1>Add Your Education!</h1>
            <label htmlFor="title" className="form-lable">Degree</label>
            <input id="title" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <label htmlFor="title" className="form-lable">Passing Year</label>
            <input id="title" className="form-control" value={passyear} onChange={(e)=>{setpassyear(e.target.value)}}/>
            <label htmlFor="title" className="form-lable">Institute name</label>
            <input id="institute" className="form-control" value={Institute} onChange={(e)=>{setinstitute(e.target.value)}}/>
            <button onClick={handleeducation}>Add</button>

            <div className="my-5">
                <h1>Your Added Education:</h1>
                <Rend/>
            </div>
        </div>
    )
}

export default Eduction;