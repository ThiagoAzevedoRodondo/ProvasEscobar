import { TextField, Button, CircularProgress } from '@material-ui/core'
import{ useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom' 

const Login = () => {

    const [ carregar, setCarregar ] = useState(false)
    const [ usuario, setUsuario ] = useState()
    const [ senha, setSenha ] = useState()

    const efetuarLogin = async () => {
        setCarregar(true)

        let url = "https://provaanevthiagoazevedorodondo.herokuapp.com/login"
        var data = { 
            usuario: usuario, 
            senha
        }

        await axios.post(
            url,
            data
        )
            .then( (retorno) => {
                
                if (retorno.data.token) {
                    console.log(retorno.data)
                    alert("Login efetuado com sucesso")
                    localStorage.setItem("MeuToken", retorno.data.token)
                    localStorage.setItem("MeuNome", retorno.data.nome)
                    window.location = "/"

                }

                if (retorno.data.token === undefined)
                    alert(retorno.data)

                setCarregar(false)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <TextField
                    label="Usuário"
                    name="usuario"
                    value={ usuario }
                    onChange={ (e) => setUsuario(e.target.value)}
                />
                <TextField
                    label="Senha"
                    name="senha"
                    type="password"
                    value={ senha }
                    onChange={ (e) => setSenha(e.target.value)}
                />
                <br/>
                {
                    (carregar)?(<CircularProgress color="secondary"/>):("")
                }

                <Button
                    color="primary"
                    variant="contained"
                    onClick={ () => efetuarLogin() }
                >
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default Login
