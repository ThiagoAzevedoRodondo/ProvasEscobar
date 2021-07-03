import { useState } from 'react'
import axios from 'axios'

import { 
    Button
} from '@material-ui/core'

const Administracao = () => {
    const [ lista, setLista ] = useState(() => [])

    const handleClick = async () => {
        const token = localStorage.getItem("MeuToken")
        
        var bearer = `Bearer ${token}`
        

        //get( URL, { configuracoes } )
        //post( URL, DATA, { configuracoes })
        const url = "https://provaanevthiagoazevedorodondo.herokuapp.com/usuarios/lista"
        await axios
                .get(
                    url,
                    {
                        headers: { "Authorization": bearer }
                    }
                )
                .then( retorno => {
                    setLista([ retorno.data ])
                })
    }

    const usuarios = lista.map( (linha, key) => {
        return (
            <div key={ key }>
                <div>{ linha.id } </div>
                <div>{ linha.nome } </div>
            </div>
        )
    })
    return (
        <div>
            <h2>Área administracao</h2>
            <Button
                variant="contained"
                color="secondary"
                onClick={ () => handleClick() }
            >
                Carregar usuários
            </Button>

            { usuarios }
        </div>
    )
}

export default Administracao
