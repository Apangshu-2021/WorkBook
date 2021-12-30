import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const About = (props) => {
  let navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      props.showAlert('Login/SignUp to access the About page', 'danger')
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  return <div>This is About page</div>
}

export default About
