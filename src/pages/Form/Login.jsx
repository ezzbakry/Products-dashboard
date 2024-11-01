import Form from 'react-bootstrap/Form';
import mystyle from './Login.module.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';


export default function LoginLib() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })
    // const [name, setname] = useState("")
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(0)
    const numoflogins = useMemo(() => {
        return `number of logins today is :  ${count}` // Memoized value based on count
    }, [count]);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
   

    const login = async (user) => {
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
        <p style={{ margin: "20px" }}>{message}</p>
        <p style={{ margin: "20px" }}>{numoflogins}</p>
        <div className={mystyle.test}>
            <Form onSubmit={handleSubmit(login)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={`form-control ${(errors.email) ? 'border-danger shadow-none' : ""}`} type="email" placeholder="name@example.com" {...register('email', {
                        required: true, onChange: (e) => {
                            setemail(e.target.value)
                        }, pattern: /^[a-zA-Z0-9]{3,9}@(gmail|yahoo)(.com)$/
                    })} />
                </Form.Group>
                {errors.email && <p className='text-danger'>invalid or required email</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={`form-control ${errors.password ? "border-danger shadow-none" : ""}`} type="password" placeholder="Enter the password" {...register("password", {
                        required: true, onChange: (e) => {
                            setpassword(e.target.value)
                        }, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/
                    })} />
                </Form.Group>
                {errors.password && <p className='text-danger'>invalid or required password</p>}

                <Button onClick={incrementCount} as="input" type="submit" value="Login" />{' '}

            </Form>

        </div>
    </>

}
