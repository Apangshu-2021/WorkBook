import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  // const host =
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://workbook123.herokuapp.com'
  //     : 'http://localhost:5000'

  const host = 'http://localhost:5000'

  const [credentials, setCredentials] = useState({ email: '', password: '' })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const json = await response.json()
    //    console.log(json)
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      props.showAlert('Successfully Logged in', 'success')
      navigate('/')
    } else {
      props.showAlert('Invalid Credentials', 'danger')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <main>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6'>
            <h2>Login to continue to WorkBook</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  value={credentials.email}
                  onChange={onChange}
                  id='email'
                  name='email'
                  aria-describedby='emailHelp'
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  value={credentials.password}
                  onChange={onChange}
                  name='password'
                  id='password'
                  required
                />
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
