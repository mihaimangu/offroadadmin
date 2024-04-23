import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {useAuth} from 'context/UserContext';

function AdminHome(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login: contextLogin, logout } = useAuth();
    const { cookies } = useAuth();
    
    const isAuth = typeof cookies?.token !== 'undefined';

    const submitHandler= async () =>{
        setUsername('');
        setPassword('');

        const response = await contextLogin(username, password);
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

            <Button variant="primary" type="submit" className="w-100" onClick={submitHandler}>
                Submit
            </Button>
            </div>}
      

          {isAuth && <div>
            <Link to="/admin/ads">
                <Button>Admin ads</Button>
            </Link>
            <Link to="/admin/jobs">
                <Button>Admin Jobs</Button>
            </Link>
            <Link to="/admin/customlists">
                <Button>Custom Lists</Button>
            </Link>
          </div>}

          {isAuth && <Button onClick={logout}>
                Logout
          </Button>}
        </div>
      );
}

export default AdminHome