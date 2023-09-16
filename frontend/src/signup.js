import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import LoadingSpinner from './loading';

function Signup(props) {
  const [loading, setloading] = useState(false);
  const [Name, setname] = useState('');
  const [Password, setpassword] = useState('');
  const [address, setaddress] = useState('');
  const [Email, setemail] = useState('');
  const [Phone, setPhone] = useState('');
  const address1 = address.replaceAll('/', '@');
  const date = format(new Date(), 'MMMM do yyyy, h:mm:ss a');
  const navigate = useNavigate();
  function handlecreate(event) {
    setloading(true);
    event.preventDefault();
    const data = JSON.stringify({U_NAME:Name,PASSWORD:Password,address:address1,Phone:Phone,Email:Email,Date:date});
    axios.post("http://192.168.0.104:8081/create/"+data)
        .then(res => {
            if (res.status===200){
              console.log(res);
              navigate('/login');
            }
    })
    .catch(err =>{
      setloading(false);
      alert(err);
    })
  } 
  if(props.id===''){
  return (
    <div className="container my-3">
      {
        loading && 
        <LoadingSpinner/>
      }
      <div className="container py-3">
          <h1>Sign up</h1>
      </div>
        <form onSubmit={ handlecreate } method="post" encType="multipart/form-data">
            <div className="container my-3">
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Username</label>
                    <input type="Name" disabled={loading} name="name" required className="form-control" id="name" onChange={e => setname(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">PASSWORD</label>
                    <input type="password" disabled={loading} required name="password" className="form-control" id="password" onChange={e => setpassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="Email" disabled={loading} name="Email" required className="form-control" id="Email" onChange={e => setemail(e.target.value)} placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="Phone" disabled={loading} name="Phone" required className="form-control" onChange={e => setPhone(e.target.value)} id="Phone" placeholder=""/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                    <input type="Address" disabled={loading} name="Address" required className="form-control" onChange={e => setaddress(e.target.value)} id="Address" placeholder=""/>
                </div>
                <button id="sign_up_new"  disabled={loading} className="btn btn-primary">Submit</button>
                <button className="btn btn-primary mx-3" disabled={loading} onClick={()=> {navigate('/')}}>Go Back</button>
            </div>
        </form>
      </div>
  )
}
  else{
      return(
        <div className='container m-3'>
          <div className="alert alert-primary" role="alert">
            You already Singed in! 
          </div>
          <button onClick={() => navigate("/")} className='btn btn-primary'>
            Home
          </button>
        </div>
      )
  }
}

export default Signup