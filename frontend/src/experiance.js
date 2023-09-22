import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Experiance(props){
    const navigate = useNavigate("");
    const id = (props.id[0]['U_id']);
    const [title,settitle] = useState('');
    const [Jtitle,setJtitle] = useState('');
    const [Dis,setDis] = useState('');
    const [Syear,setSyear] = useState('');
    const [Eyear,setEyear] = useState('');
    const [Address,setAddress] = useState('');
    const address1 = Address.replaceAll('/', '@');
    
    const data = {
        'id':id,
        "title":title,
        "Syear":Syear,
        "Eyear":Eyear,
        "Dis":Dis,
        "Address":address1,
        "Jtitle":Jtitle
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
      <th scope="col">Job</th>
      <th scope="col">Address</th>
      <th scope="col">Start</th>
      <th scope="col">End</th>
      <th scope="col">Dis</th>
    </tr>
    </thead>
    <tbody>{
            data1.map((element) => {
                key+=1;
                return(
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{element.title}</td>
                        <td>{element.Ctitle}</td>
                        <td>{element.Address}</td>
                        <td>{element.Start}</td>
                        <td>{element.End}</td>
                        <td>{element.discription}</td>
                    </tr>
                )
            })
    }
    </tbody>
    </table> 
    <button className="btn btn-primary" onClick={()=>{navigate("/Referance")}}>Submit</button>
  </div>  )
        }
        else{
            return("You have no added skill!");
        }
    }
    function eduseen(){
        axios.post("http://192.168.0.104:8081/getExp/"+id)
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
        axios.post("http://192.168.0.104:8081/addExp/"+JSON.stringify(data))
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
            <h1>Add Your Experiance!</h1>
            
            <label htmlFor="Jtitle" className="form-lable">Job Title</label>
            <input id="Jtitle" className="form-control" value={Jtitle} onChange={(e)=>{setJtitle(e.target.value)}}/>
            <label htmlFor="title" className="form-lable">Company Name</label>
            <input id="title" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <label htmlFor="Address" className="form-lable">Company Address</label>
            <input id="Address" className="form-control" value={Address} onChange={(e)=>{setAddress(e.target.value)}}/>
            <label htmlFor="Syear" className="form-lable">Starting Year</label>
            <input id="Syear" className="form-control" value={Syear} onChange={(e)=>{setSyear(e.target.value)}}/>
            <label htmlFor="Eyear" className="form-lable">Ending Year</label>
            <input id="Eyear" className="form-control" value={Eyear} onChange={(e)=>{setEyear(e.target.value)}}/>
            <label htmlFor="Dis" className="form-lable">Discription</label>
            <textarea id="Dis" className="form-control" value={Dis} onChange={(e)=>{setDis(e.target.value)}}/>


            <button onClick={handleskill} className="btn btn-primary my-3">Add</button>  

            <div className="my-3">
                <h1>Your Added Skills:</h1>
                <Rend/>
            </div>
        </div>
    )
}

export default Experiance;