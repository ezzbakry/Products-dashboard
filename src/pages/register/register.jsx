import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import mystyle from '../Form/Login.module.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"


export default function Register() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const [loader, setloader] = useState(false)

    // const load = useSelector((state) => state.load.load)
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })

    const Register = async (user) => {
        setloader(true)
        try {
            const res = await axios.post("http://localhost:3000/users", { name, email, password })
            setmessage(res.data.message)
            console.log(res.data)
        } catch (err) {
            setmessage(err.res?.data.message || err.res.message)
        }
        setloader(false)

    }
    return <>
        <p> {message}</p>

        {/* <p> {name}</p> */}
        <div className={mystyle.test}>
            <Form onSubmit={handleSubmit(Register)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className={`form-control ${(errors.name) ? "border-danger shadow-none" : ""}`} placeholder="Enter the name" {...register("name", {
                        required: true, onChange: (e) => {
                            setname(e.target.value)
                        }
                    })} />
                </Form.Group>
                {errors.name && <p className='text-danger'>name is required</p>}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => {
                        setemail(e.target.value)
                    }} className={`form-control ${(errors.email) ? 'border-danger shadow-none' : ""}`} type="email" placeholder="name@example.com" {...register('email', {
                        required: true, onChange: (e) => {
                            setemail(e.target.value)
                        }, pattern: /^[a-zA-Z0-9]{3,9}@(gmail|yahoo)(.com)$/
                    })} />
                </Form.Group>
                {errors.email && <p className='text-danger'>invalid or required email</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => {
                        setpassword(e.target.value)
                    }} className={`form-control ${errors.password ? "border-danger shadow-none" : ""}`} type="password" placeholder="Enter the password" {...register("password", {
                        required: true, onChange: (e) => {
                            setpassword(e.target.value)
                        }, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/
                    })} />
                </Form.Group>
                {errors.password && <p className='text-danger'>invalid or required password</p>}
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className={`form-control ${errors.phone?"border-danger shadow-none":""}`} type="number" placeholder="Enter the phone" {...register("phone", { required: true, pattern: /[0-9]{11}/ })} />
                </Form.Group>
                {errors.phone && <p className='text-danger'>invalid or required phone</p>} */}
                <Button  type="submit" value="Register" disabled={loader} >
                    {' '}
                    {loader ? "loading...." : "Register"}
                </Button>
            </Form>


        </div>






    </>


}