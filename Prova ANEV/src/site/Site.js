import { useState } from 'react'

import Menu from './menu'
import Conteudo from './conteudo'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { temaClaro, temaEscuro } from '../theme/theme'


import RecebendoVariavel from './RecebendoVariavel'
import Tabela from './Tabela'
import DevolvendoItem from './DevolvendoItem'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Site = () => {

    const [ tema, setTema ] = useState( temaEscuro )
    const [ escuro, setEscuro ] = useState( true )
    const [ valorFilho, setValorFilho ] = useState("")

    const alterarTema = () => {
        if (escuro) 
            setTema( temaClaro )
        else
            setTema( temaEscuro )

        setEscuro( !escuro )
    }

    const recebeValor = ( num ) => {
        setValorFilho( num )
    }

    return (
        <ThemeProvider theme={ tema }>
            <CssBaseline />
            <Menu tema={ alterarTema } />
            <Carousel
                autoplay={ true }
                infiniteLoop={ true }
                interval={ 2000 }
            >
                <div>
                    <img alt="1" src="https://wallpaperaccess.com/full/2100978.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="1"  src="https://wallpapercave.com/wp/wp2199362.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="1"  src="https://wallpaper.dog/large/20466359.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>

            <DevolvendoItem 
                numero={ 35 }
                retorno={ recebeValor }
            />
            <hr />
            <RecebendoVariavel 
                rec_variavel={ "Isso é uma variável de pai pra filho" }
                teste = { 58 }
                valor_novo={ valorFilho }
            />
            <Conteudo />            
        </ThemeProvider>
    )
}

export default Site