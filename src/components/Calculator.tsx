import React from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'
import BaseButton from './common/BaseButton'

const usetStyles = makeStyles(theme => ({
  container: {
    minWidth: '350px',
    maxWidth: '500px',
    padding: '16px',
    background: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  btnContainer: {
    // padding: '8px'
  },
  btnPadding: {
    padding: '8px'
  }


}))

const Calculator = () => {
  const classes = usetStyles()

  return(
    <ThemeProvider theme={theme}>
      <Grid container justify='center'>
        <Grid item container className={classes.container}>
          <Grid item xs={12}>
            Calculator
          </Grid>

          <Grid item container xs={9}>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'lightGrey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'2'} background={'lightGrey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'3'} background={'lightGrey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'grey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'2'} background={'grey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'3'} background={'grey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'grey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'2'} background={'grey'} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'3'} background={'grey'} />
            </Grid>
          </Grid>
          <Grid item container xs={3}>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'orange'} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'orange'} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'1'} background={'orange'} />
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Calculator