import { useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const Tabela = ({ colunas, linhas, itensPagina }) =>  {

    useEffect(() => {
        console.log(linhas)
    })
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                columns = { colunas }
                rows = { linhas }
                pageSize = { itensPagina }
            />
        </div>
    )
}

export default Tabela