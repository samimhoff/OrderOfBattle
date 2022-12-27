import axios from 'axios';
import React, {useState} from 'react';

export const Login = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [logInFailed, setLogInFailed] = useState(false);
    const [data, setData] = useState({clientId: null, username: null});

    const register = async () => {
        try {
            axios({
                method: "post",
                data: {
                    username: registerUsername,
                    password: registerPassword
                },
                withCredentials: true,
                url: "http://localhost:5000/register"
            })
            .then((res) => console.log("result from register on client side: ", res));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const login = async () => {
        try {
            axios({
                method: "post",
                data: {
                    username: loginUsername,
                    password: loginPassword
                },
                withCredentials: true,
                url: "http://localhost:5000/login"
            })
            .then((res) => {
                console.log(res)
                if (res.data === false) {
                    setLogInFailed(true);
                } else {
                    setLogInFailed(false);
                }
            });
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const getUser = async () => {
        try {
            axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:5000/userone"
            })
            .then((res) => setData(res.data));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const logout = async () => {
        try {
            axios({
                method: "get",
                withCredentials: true,
                url: "http://localhost:5000/logout"
            })
            .then((res) => console.log(res));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    return (
        <div className='container mt-3'>
            <div className='text-center'>
                <h1>Register</h1>
                <div className="mt-4 form-row">
                    <input className='form-control col-md-5' type="text" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    <input className='form-control col-md-5' type="text" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    <button className='btn btn-success' onClick={register}>Submit</button>
                </div>
            </div> 

            <div className='text-center mt-3'>
                <h1>Login</h1>
                <div className="mt-4 form-row">
                    <input className='form-control col-md-5' type="text" placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
                    <input className='form-control col-md-5' type="text" placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
                    <button className='btn btn-success' onClick={login}>Submit</button>
                </div>
                {logInFailed ? <span>Login failed. Try again</span> : <></>}
            </div> 
            {
                data.username != null ? <h2 className='text-center'>Hello {data.username}</h2> : null
            }
            {
                data.username != null ? <button onClick={logout}>Logout!</button> : null
            }

            <div className='text-center mt-4'>
                <h4>Get User </h4>
                <span> </span>
                <button className='btn btn-success' onClick={getUser}>Submit</button>
            </div>

        </div>
    )
}