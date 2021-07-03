import { Paper, Typography } from '@material-ui/core'

const Conteudo = () => {
    return (
        <Paper style={{ marginTop: 10, padding: 20 }}>
            <Typography variant="h4">
               Ola e bem-vindo ao site do Thiagão
                </Typography>
            <Typography variant="body">
                Exemplo de texto: O site do Thiagão tem muitas funcionalidades que os nossos clientes gostam de usar.
                </Typography>
        </Paper>
    )
}

export default Conteudo
