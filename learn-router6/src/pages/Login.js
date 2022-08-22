import { useState } from 'react';
import {  useNavigate } from "react-router-dom";


// send prop from App.js
const Login = ({setUser}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // use to send this page to page that set of the function
  const navigate = useNavigate()

  // this function for check of the onChange in input and prepare value to set to dashboard\
  // if not go to dashboard that go to home page if it is false 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // when name and email is true that go to dashboard
    // if not is use only home page
    if(!name || !email) return;
    setUser({name : name, email : email})
    navigate('/dashboard')
    
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;