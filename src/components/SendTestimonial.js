import React, { useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

function SendTestimonial() {

  const [testimonialFeedback, setTestimonial] = useState({
    firstname: '',
    lastname: '',
    story: '',
    userType: '',
    city: '',
  })
 
  const onChange = (e) =>{
    setTestimonial({...testimonialFeedback, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.prevventDefault();
    alert('submitted');
  }

  return (
    <div className='send-test'>
        <div className='mb-4'>
            <h2>Share your amazing story!</h2>
        </div>

        <form>
        <span>Upload a photo</span>
        <div class="input-group mb-3">
        <div class="custom-file">
            <input type="file" required className="custom-file-input" name='image' id="inputFile" />
            <label className="custom-file-label" htmlFor="image" style={{backgroundColor: '#fff'}}>Choose file</label>
        </div>
        </div>
        
        <div className="form-row">
            <div className="col">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" name="firstname" onChange={onChange} className="form-control" required />
            </div>
            <div className="col">
            <label htmlFor="inputLastname">Last Name</label>
            <input type="text" name="lastname" onChange={onChange} className="form-control" required  />
            </div>
        </div>

        <div className="form-group mt-3">
        <label htmlFor="story">Share your story</label>
        <textarea name='story' required onChange={onChange} className="address form-control" id="address"></textarea>
        </div>

        <div>
        What did you interact with Vasiti as? <input type='radio' onChange={onChange} name='userType' value='customer' /> Customer  <input type='radio' onChange={onChange} name='userType' value='Vendor' /> Vendor
        </div>

        <div className="form-group mt-3">
        <label htmlFor="city">City or Higher Institution for Students</label>
        <input type="text" onChange={onChange} required className="form-control" name="city" id="city" />
        </div>

        <div style={{textAlign: 'right'}}><input type="submit" value='Share your story!' className='btn'/></div>
        </form>
    </div>
  )
}

export default SendTestimonial