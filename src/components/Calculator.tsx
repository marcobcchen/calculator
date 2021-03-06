import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'
import BaseButton from './common/BaseButton'
import Count from './common/Count'
import * as logic from './common/logic'

const usetStyles = makeStyles(theme => ({
  container: {
    minWidth: '350px',
    maxWidth: '500px',
    padding: '16px',
    margin: '0 auto',
    background: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  btnPadding: {
    padding: '8px',
  },
  count:{
    padding: '32px 8px 0 8px',
  }
}))

const Calculator = () => {
  const classes = usetStyles()
  const [result, setResult] = useState('0')
  const [isZero, setIsZero] = useState(false)
  
  const reset = () => {
    logic.cancel()
    setResult('0')
  }

  const formula = (value: string) => {
    setIsZero(true)
    switch (value){
      case 'C':
        reset()
        break
      case '+':
        if(!isZero) setResult(logic.add())
        break
      case '-':
        if(!isZero) setResult(logic.subtract())
        break
      case '×':
        if(!isZero) setResult(logic.multiply())
        break
      case '÷':
        if(!isZero) setResult(logic.divide())
        break
      case '=':
        // setIsZero(false)
        setResult(logic.equal())
        break
    }
  }

  const combiString = (num: string) => {
    if(isZero){
      setIsZero(false)
      setResult(logic.stringConcat(num, '0'))
    }else{
      setResult(logic.stringConcat(num, result))
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.count}>
          <Count result={result} />
        </Grid>
        <Grid item container xs={9}>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'C'} background={'lightGrey'} onClick={formula} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'+/-'} background={'lightGrey'} onClick={formula} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'%'} background={'lightGrey'} onClick={formula} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'7'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'8'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'9'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'4'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'5'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'6'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'1'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'2'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'3'} background={'grey'} onClick={combiString} />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={8} className={classes.btnPadding}>
              <BaseButton name={'0'} background={'grey'} size={'lg'} onClick={combiString} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'.'} background={'grey'} onClick={combiString} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={3}>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'÷'} background={'orange'} onClick={formula} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'×'} background={'orange'} onClick={formula} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'-'} background={'orange'} onClick={formula} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'+'} background={'orange'} onClick={formula} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'='} background={'orange'} onClick={formula} />
            </Grid>
          </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Calculator