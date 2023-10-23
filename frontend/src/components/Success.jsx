import React from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className='success'>
      <img src="/success.svg" alt="Success" style={{ width: "200px"}} />
      <h1 className='success-head'>Details Submitted Successfully</h1>
      <button className="success-btn" type="button" onClick={() => navigate("/form")}>Submit Another form</button>
    </div>
  )
}

export default Success
