import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Eduction from './educationForm';

function CreateCV(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, settitle] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [address, setaddress] = useState(null);
  const [intoduction, setintoduction] = useState(null);
  const navigate = useNavigate('');
  const [loading, setloading] = useState(false);
  if(props.id!==''){
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    const address1 = address.replaceAll('/', '@');

    const data = {
      'title':title,
      'id':props.id.id,
      "fname":fname,
      "lname":lname,
      "Email":email,
      "Phone":phone,
      "address":address1,
      "introduction":intoduction,
    }
    try {
      const response = await fetch('http://192.168.0.104:8081/upload', {
        method: 'POST',
        body: formData,
      });

      console.log(response);
      if (response.ok) {
        console.log('File uploaded successfully');
        axios.post("http://192.168.0.104:8081/createcvd/"+JSON.stringify({data}))
        .then(res => {
            if (res.status===200){
              props.onset(res.data);
              navigate('/Education');
            }
        })
        .catch(err =>{
          alert("Please File All The Input Filleds!");
          console.log(err);
        })
      } else {
        console.error('File upload failed');
        alert("Please Select File!")
        
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert("Please Check Your internet Connection!");
    }
  };

  return (
    <div>
      <h1 align="center" className='mt-3'>Create CV</h1>
      <div className="mb-3">
        <label className="form-label" htmlFor='file'>Profile Picture</label>
        <input type="file" className='form-control' id='file' onChange={handleFileChange} />
      </div>
      <div className="mb-3">
                    <label htmlFor="fName" className="form-label">First Name</label>
                    <input type="Name" required disabled={loading} onChange={e => {setfname(e.target.value);}} className="form-control" name="fName" id="fName" aria-describedby="fNameHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lName" className="form-label">Last Name</label>
                    <input type="lName" required disabled={loading} onChange={e => {setlname(e.target.value);}} className="form-control" name="lName" id="lName" aria-describedby="lNAmeHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="text" placeholder='abc@gmail.com' required disabled={loading} onChange={e => {setemail(e.target.value); }} className="form-control" name="Email" id="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="Phone" required disabled={loading} placeholder='+923141234567' onChange={e => {setphone(e.target.value); }} className="form-control" name="Phone" id="Phone" aria-describedby="PhoneHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="address" required disabled={loading} onChange={e => {setaddress(e.target.value);}} className="form-control" name="address" id="address" aria-describedby="addressHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">TiTle</label>
                    <input type="title" placeholder='Programmer' required disabled={loading} onChange={e => {settitle(e.target.value); }} className="form-control" name="title" id="title" aria-describedby="titleHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="intoduction" className="form-label">Introduction</label>
                    <textarea type="intoduction" required disabled={loading} onChange={e => {setintoduction(e.target.value); }} className="form-control" name="intoduction" id="intoduction" aria-describedby="titleHelp"/>
                </div>
      <button className="btn btn-primary my-3" onClick={handleFileUpload}>Upload File</button>
    </div>
    );
  }else{
    return(<div className='alert alert-primary my-5'>Please Login First! <br/><Link className="btn mt-3 btn-primary" to="/login">Login</Link></div>)
  }
}
export default CreateCV;
