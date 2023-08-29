import React, { useState } from 'react';
import './LoginForm.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { userAuth } from '../Auth/Auth';

export default function LoginForm() {


    let [user, setUser] = useState({
        email: "",
        password: ""
    });


    let Auth = userAuth();

    function addData() {
        Auth.login(user);

    }

    return (
        <>
            <div className="form-bg">
                <div className="form-set">

                    <marquee behavior="alternate" direction="right" scrollamount="" > <h1 className='loginform-heading'>Welcome User</h1></marquee>
                    <Form className='form'>
                        <FormGroup floating>
                            <Input className='loginform-in'
                                required
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={user?.email}
                                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                            />
                            <Label for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                required
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={user?.password}
                                onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                            />
                            <Label for="examplePassword">
                                Password
                            </Label>
                        </FormGroup>
                        {' '}
                        <FormGroup check>
                            <Input
                                id="exampleCheckbox"
                                name="checkbox"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="exampleCheckbox"
                            >
                                Remember Me
                            </Label>
                        </FormGroup>
                        {' '}
                        <Button style={{ backgroundColor: "green", width: "90px", marginTop: "10px" }} onClick={() => addData()}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}
