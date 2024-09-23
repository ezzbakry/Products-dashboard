import Form from 'react-bootstrap/Form';
import mystyle from './Login.module.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import React, { useState } from 'react';
import axios from 'axios';


export default function LoginLib() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    // const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")


    const login = async (user) => {
        setmessage("")
        try {
            const res = await axios.post("https://products-backend-nine.vercel.app/users/login", { email, password })
            console.log(res.data.message)
            const { token } = res.data
            localStorage.setItem('token', token)
            setmessage("logged in successfully")
        } catch (e) {
            setmessage(e.res?.data.message || e.res.message)
        }
    }

    return <>
        <p>{message}</p>
        <div className={mystyle.test}>
            <Form onSubmit={handleSubmit(login)}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={`form-control ${(errors.email) ? 'border-danger shadow-none' : ""}`} type="email" placeholder="name@example.com" {...register('email', {
                        required: true, onChange: (e) => {
                            setemail(e.target.value)
                        }, pattern: /^[a-zA-Z]{3,8}[0-9]{1,3}(@)(gmail|yahoo)(.com)$/
                    })} />
                </Form.Group>
                {errors.email && <p className='text-danger'>invalid or required email</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={`form-control ${errors.password ? "border-danger shadow-none" : ""}`} type="password" placeholder="Enter the password" {...register("password", {
                        required: true, onChange: (e) => {
                            setpassword(e.target.value)
                        }, pattern: /^[a-zA-Z0-9]{3,15}[@.?-_=]/
                    })} />
                </Form.Group>
                {errors.password && <p className='text-danger'>invalid or required password</p>}

                <Button as="input" type="submit" value="Login" />{' '}

            </Form>

        </div>
        {/* <form onSubmit={handleSubmit(login)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input type="email" className="form-control"
                    {...register('email', { required: true, pattern: /^[a-zA-Z]{3,8}[0-9]{1,3}(@)(gmail|yahoo)(.com)$/ })}

                />
                {errors.email && <p className="text-danger">invalid email</p>}

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    {...register('password', { required: true })}
                />
                {errors.password && <p className="text-danger">invalid Password</p>}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form> */}



    </>

}
