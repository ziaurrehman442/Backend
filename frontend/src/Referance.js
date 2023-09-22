import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Referance(props){
    const navigate = useNavigate("");
    const id = (props.id[0]['U_id']);
    const tid = (props.id[0]['tid'] ?? '');
    const [title,settitle] = useState('');
    const [Jtitle,setJtitle] = useState('');
    const [Name,setName] = useState('');
    const [Phone,setPhone] = useState('');
    const [Address,setAddress] = useState('');
    const address1 = Address.replaceAll('/', '@');
    
    const data = {
        'id':id,
        "title":title,
        "Name":Name,
        "Phone":Phone,
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
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Job</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
    </thead>
    <tbody>{
            data1.map((element) => {
                key+=1;
                return(
                    <tr>
                        <th scope="row">{key}</th>
                        <td>{element.Name}</td>
                        <td>{element.title}</td>
                        <td>{element.Ctitle}</td>
                        <td>{element.Address}</td>
                        <td>{element.Phone}</td>
                    </tr>
                )
            })
    }
    </tbody>
    </table> 
    <button className="btn btn-primary" onClick={()=>{if(tid===''){navigate('/Templates')}else{navigate('/'+tid)}}}>Submit</button>
  </div>  )
        }
        else{
            return("You have no added skill!");
        }
    }
    function eduseen(){
        axios.post("http://192.168.0.104:8081/getRef/"+id)
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
        axios.post("http://192.168.0.104:8081/addRef/"+JSON.stringify(data))
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
            
            <label htmlFor="Name" className="form-lable">Name</label>
            <input id="Name" className="form-control" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="Jtitle" className="form-lable">Job Title</label>
            <input id="Jtitle" className="form-control" value={Jtitle} onChange={(e)=>{setJtitle(e.target.value)}}/>
            <label htmlFor="title" className="form-lable">Company Name</label>
            <input id="title" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <label htmlFor="Address" className="form-lable">Address</label>
            <input id="Address" className="form-control" value={Address} onChange={(e)=>{setAddress(e.target.value)}}/>
            <label htmlFor="Phone" className="form-lable">Phone</label>
            <textarea id="Phone" className="form-control" value={Phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <button onClick={handleskill} className="btn btn-primary my-3">Add</button>  

            <div className="my-3">
                <h1>Your Added Skills:</h1>
                <Rend/>
            </div>
        </div>
    )
}

export default Referance;