import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        const URl = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URl, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token',res.data.data.token)
        })
        .catch(err => console.log(err))
        // reset({
        //     email:'',
        //     password: ''
        // })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
    <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>

    <div className='login_test_data'>

      <h4 className='login_teste_title'>Test data</h4>

      <div className='login_example_email'>
        <i class='bx bx-envelope'></i>
        <p>mason@gmail.com</p>
      </div>

      <div className='login_example_pass'>
        <i class='bx bx-lock'></i>
        <p>mason1234</p>
      </div>
    </div>
    
    <div className='login-register'>
      <div className='login__div-email'>
        <label className='login__label' htmlFor="email">Email</label>
        <input {...register('email')} className='login__input' type="email" id="email" />
      </div>

      <div className='login__div-password'>
        <label className='login__label' htmlFor="password">Password</label>
        <input {...register('password')}className='login__input' type="password" id="password" />
      </div>
    </div>

    <button className='login__btn'>Login</button>
  </form>

  )
}

export default FormLogin