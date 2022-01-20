import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const About = () => {
  let navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <div className='container mt-3'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title' id='about_title'>
                  About WorkBook
                </h4>
                <p className='card-text'>
                  This app is made by me, Apangshu Debnath.This is my first
                  React based project.WorkBook is a MERN application where an
                  user can create personalised notes as well as view,edit and
                  delete them.To access the application one only needs to make
                  an account.One user's notes cannot be viewed by another user
                  as this application uses jwt authentication.On signup/login
                  the user receives a token, which contains the user's unique
                  id,with the help of which the his/her's notes(if present) are
                  fetched from the database and thus accessibe to only that
                  particular user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
