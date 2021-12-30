import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (credentials.password !== credentials.cpassword) {
      props.showAlert('Password and Confirm Password does not match', 'danget')
    } else {
      const response = await fetch(
        'http://localhost:5000/api/auth/createuser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      )
      const json = await response.json()
      //  console.log(json)
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken)
        props.showAlert('Account Created', 'success')
        navigate('/')
      } else {
        props.showAlert('Invalid Credentials', 'danger')
      }
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container mt-3'>
      <h2>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            onChange={onChange}
            name='name'
            value={credentials.name}
            minLength={3}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            onChange={onChange}
            name='email'
            value={credentials.email}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            onChange={onChange}
            name='password'
            value={credentials.password}
            minLength={5}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cpassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            id='cpassword'
            onChange={onChange}
            name='cpassword'
            value={credentials.cpassword}
            minLength={5}
          />
        </div>
        <button
          type='submit'
          disabled={
            credentials.name.length < 3 ||
            credentials.password.length < 5 ||
            credentials.cpassword.length < 5
          }
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
