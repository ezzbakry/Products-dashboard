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
    // const load = useSelector((state) => state.load.load)
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange" })
    // const onSubmit = (data) => console.log(data)



    const Register = async (user) => {
        const Name = user.name
        const Email = user.email
        const Password = user.password
        setname(Name)
        setemail(Email)
        setpassword(Password)
        try {
            const res = await axios.post('http://localhost:3000/users/', { Name, Email, Password })
            setmessage("successfully")
        } catch (err) {
            setmessage("failed")
        }
        //err.res?.res.message||
    }
    return <>
        <p> {message}</p>
        <div className={mystyle.test}>
            <Form onSubmit={handleSubmit(Register)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className={`form-control ${(errors.name) ? "border-danger shadow-none" : ""}`} placeholder="Enter the name" {...register("name", { required: true })} />
                </Form.Group>
                {errors.name && <p className='text-danger'>name is required</p>}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={`form-control ${(errors.email) ? 'border-danger shadow-none' : ""}`} type="email" placeholder="name@example.com" {...register('email', { required: true, pattern: /^[a-zA-Z]{3,8}[0-9]{1,3}(@)(gmail|yahoo)(.com)$/ })} />
                </Form.Group>
                {errors.email && <p className='text-danger'>invalid or required email</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={`form-control ${errors.password ? "border-danger shadow-none" : ""}`} type="password" placeholder="Enter the password" {...register("password", { required: true, pattern: /[._!?@=]/ })} />
                </Form.Group>
                {errors.password && <p className='text-danger'>invalid or required password</p>}
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className={`form-control ${errors.phone?"border-danger shadow-none":""}`} type="number" placeholder="Enter the phone" {...register("phone", { required: true, pattern: /[0-9]{11}/ })} />
                </Form.Group>
                {errors.phone && <p className='text-danger'>invalid or required phone</p>} */}
                <Button onSubmit={Register()} as="input" type="submit" value="Register" />{' '}
            </Form>


        </div>






    </>


}