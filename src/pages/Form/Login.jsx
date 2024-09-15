import Form from 'react-bootstrap/Form';
import mystyle from './Login.module.css'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"

export default function LoginLib() {
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"})


    const login = (user) => {
        console.log(user)
    }

    return <>
        <div className={mystyle.test}>
            <Form onSubmit={handleSubmit(login)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the name" {...register("name", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  className={`form-control ${(errors.email)?'border-danger shadow-none':""}`} type="email" placeholder="name@example.com" {...register('email', { required: true, pattern: /^[a-zA-Z]{3,8}[0-9]{1,3}(@)(gmail|yahoo)(.com)$/ })} />
                </Form.Group>
                {errors.email && <p className='text-danger'>invalid email</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={`form-control ${errors.password?"border-danger shadow-none":""}`} type="password" placeholder="Enter the password" {...register("password", { required: true,pattern: /[._!?@=]/ })} />
                </Form.Group>
                {errors.password && <p className='text-danger'>required password or invalid</p>}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className={`form-control ${errors.phone?"border-danger shadow-none":""}`} type="number" placeholder="Enter the phone" {...register("phone", { required: true, pattern: /[0-9]{11}/ })} />
                </Form.Group>
                {errors.phone && <p className='text-danger'>invalid phone</p>}
                <Button as="input" type="submit" value="Submit" />{' '}

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
