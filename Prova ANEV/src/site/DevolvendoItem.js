
const DevolvendoItem = ({ numero, retorno }) => {

    const multiplicar = () => {
        let valor = numero * 5 - 10 + 3 * 4
        console.log("Aqui estou no filho: " + valor)

        retorno( valor )
    }

    return (
        <div>
            O número recebido é: { numero }
            <br />
            <input 
                type="button" 
                value="Multiplicar por 5"
                onClick={ () => { multiplicar() }}
             />
        </div>
    )
}

export default DevolvendoItem