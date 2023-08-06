import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {login, checkPrivateRoute} from 'api/general';
import { set } from 'react-ga';
import {useAuth} from 'context/UserContext';

function AdminHome(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login: contextLogin, logout } = useAuth();
    const { cookies } = useAuth();
    
    const isAuth = typeof cookies?.token !== 'undefined';
    console.log('is auth?', isAuth);


    const submitHandler= async () =>{
        console.log('submit ', username, password);
        setUsername('');
        setPassword('');

        const response = await contextLogin(username, password);
        console.log('response is', response);

    }

    const checkPrivateRouteHandler = () => {

        checkPrivateRoute().then(res => {
            console.log('res', res)
        }).catch(err => {
            console.log('err', err)
        })
    }

    return (
        <div>
            <h1>Admin login</h1>
            {!isAuth && <div className="admin-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={username} onChange={e => setUsername(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} value={password} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitHandler}>
                Submit
            </Button>
            </div>}
      

          <Button onClick={checkPrivateRouteHandler}>
            check private route
          </Button>

          <Button onClick={logout}>
            Logout
          </Button>
        </div>
      );
}

export default AdminHome