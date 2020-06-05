import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    orange: string
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

const theme = createMuiTheme({
  palette: {
    common: {
      orange: customOrange,
    }
  },
  custom: {
    btn: {
      padding: 0,
      paddingBottom: '100%',
      width: '100%',
      borderRadius: '50%',
      border: 0,
      fontWeight: 'bold',
      fontSize: '1rem',
      
    }
  }
})

export default theme