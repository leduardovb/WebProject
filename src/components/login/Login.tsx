import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function Login() {

    const [email,setEmail] = useState<string>("") 
    const [senha,setSenha] = useState<string>("") 
    const history = useHistory()
    const verifyLogin = () => {
        console.log(email)
        console.log(senha)
        if(email === "teste@email.com" && senha === "123456"){
          history.push("/")  
        }else{
            setEmail("")
            setSenha("")
        }
    }

    

    return (
        <>
        <div className="container">
            <div className="box">
                <form action="" className="form">
                    <div className="labelCenter">
                        <label>Email</label>
                    </div>
                    <div className="inputEmail">
                        <Input onChange={ (e) => setEmail(e.target.value)} value={email}  placeholder="email@email" />
                    </div>
                    <div className="labelCenter">
                        <label>Senha</label>
                    </div>
                    <div className="inputEmail">
                        <Input onChange={ (e) => setSenha(e.target.value)} value={senha} placeholder="senha" />
                    </div>  
                    <br />
                    <div className="labelCenter">
                        <Button onClick={verifyLogin} variant="contained">Login</Button>
                    </div>
                </form>
            </div>            
        </div>
        </>
    )
}

export default Login