import { createMuiTheme } from '@material-ui/core/styles'

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#00BFFF',
        },
        secondary: {
          main: '#66CDAA',
        },
        background: {
          default: '#3CB371',
          paper: '#00FF7F',
        },
      },    
}))

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#4F4F4F',
        },
        secondary: {
          main: '#C0C0C0',
        },
        background: {
          default: '#000080',
          paper: '#006400',
        },
      },
}))

export { temaClaro, temaEscuro }
