import React, { useState } from 'react'
import subscribephone from './subscribe-phone.png'
import Alert from '@mui/material/Alert';

export const Subcription = () => {

  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();
    setSuccessMsg(email + ' Thank you. Check your email for more details');
  }
  return (
    <>
        <section className='subscribe-section'>

        <div className='subscribe-img'>
            <img src={subscribephone} alt='image' />
        </div>

        <div className='subscribe-content'>
        <h5>Be a member<br/>of our community &#127881;</h5>
        <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
        <Alert severity='success' style={successMsg ? {display: '', fontSize: '12px'} : {display: 'none'}}>{successMsg}</Alert>
        <div className='optin-div'>
        
        <form onSubmit={onSubmit}>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} required name='email' placeholder='enter your email address'/><input type='submit' value='SUBSCRIBE' />
       </form>
        </div>

        </div>
        </section>
    </>
  )
}
