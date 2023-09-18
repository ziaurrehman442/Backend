import React, { useState } from 'react';
import LoadingSpinner from './loading';



const CreateCV = () => {
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState(null);
  const [title, settitle] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [address, setaddress] = useState(null);
  const [intoduction, setintoduction] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  
 

  const handleUpload = () =>{
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title',title);
    formData.append("fname",fname);
    formData.append("lname",lname);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("address",address);
    formData.append("intro",intoduction);
      const response = fetch('http://192.168.0.104:8081/upload', {
        method: 'post',
        body: formData,
      });
      if (response.ok) {
        console.log('Image uploaded successfully');
        // Handle success here (e.g., show a success message)
      } else {
        console.error('Image upload failed');
        // Handle error here (e.g., show an error message)
      } 
  };
  return (
    <div className='container m-5'>
      {
                loading &&
                
                <LoadingSpinner/>
            }
              <form onSubmit={ handleUpload }>
              <div className="mb-3 form-group">
                    <label htmlFor="file" className="form-label">Select Your Picture</label>
                    <input type="file" required disabled={loading} onChange={handleFileChange} className="form-control" name="file" id="file" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="fName" className="form-label">First Name</label>
                    <input type="Name" required disabled={loading} onChange={e => {setfname(e.target.value);}} className="form-control" name="fName" id="fName" aria-describedby="fNameHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="lName" className="form-label">Last Name</label>
                    <input type="lName" required disabled={loading} onChange={e => {setlname(e.target.value);}} className="form-control" name="lName" id="lName" aria-describedby="lNAmeHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="text" placeholder='abc@gmail.com' required disabled={loading} onChange={e => {setemail(e.target.value); }} className="form-control" name="Email" id="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="Phone" required disabled={loading} placeholder='+923141234567' onChange={e => {setphone(e.target.value); }} className="form-control" name="Phone" id="Phone" aria-describedby="PhoneHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="address" required disabled={loading} onChange={e => {setaddress(e.target.value);}} className="form-control" name="address" id="address" aria-describedby="addressHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="title" className="form-label">TiTle</label>
                    <input type="title" placeholder='Programmer' required disabled={loading} onChange={e => {settitle(e.target.value); }} className="form-control" name="title" id="title" aria-describedby="titleHelp"/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="intoduction" className="form-label">Introduction</label>
                    <textarea type="intoduction" required disabled={loading} onChange={e => {setintoduction(e.target.value); }} className="form-control" name="intoduction" id="intoduction" aria-describedby="titleHelp"/>
                </div>
                <button id="Submit" className="btn btn-outline-primary" disabled={loading}>Submit</button>
            </form>
    </div>
  );
};

export default CreateCV;
