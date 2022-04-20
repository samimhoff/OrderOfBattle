import axios from 'axios';
import React, {useState} from 'react';

export const Login = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

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
            .then((res) => console.log("result from login on client side: ", res));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const getUser = async () => {
        try {
            const response = await fetch("http://localhost:5000/user");
            console.log(response);
        } catch (error: any) {
            console.error(error.message);
        }
    }
    return (
        <>
            <div>
                <h1>Register</h1>
                <input type="text" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                <input type="text" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div> 

            <div>
                <h1>Login</h1>
                <input type="text" placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
                <input type="text" placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
                <button onClick={login}>Submit</button>
            </div> 

            <div>
                Get User
                <button>Submit</button>
            </div>

        </>
    )
}