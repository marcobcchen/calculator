import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    orange: string
    lightGreen: string
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      btn: any
    }
  }
  
  interface ThemeOptions {
    custom?: {
      btn?: any
    }
  }
}

const customOrange = '#f38844'
const customLightGreen = '#ddd'

const theme = createMuiTheme({
  palette: {
    common: {
      orange: customOrange,
      lightGreen: customLightGreen,
    }
  },
  custom: {
    btn: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      borderRadius: '999px',
      border: 0,
      fontWeight: 'bold',
      fontSize: '2rem',
    }
  },
})

export default theme