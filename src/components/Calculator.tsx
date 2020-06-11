import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'
import BaseButton from './common/BaseButton'
import Count from './common/Count'
import { stringConcat, isNumber } from './common/logic'

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
  const [clickValue, setClickValue] = useState('0')
  const [result, setResult] = useState('0')
  
  useEffect(() => {
    console.log(clickValue)
    // if(isNumber(clickValue)) valueAry.push(clickValue) 
    // if(clickValue === 'C') {
    //   valueAry = ['0']
    // }
    
    // console.log(valueAry)
    // const text = stringConcat(valueAry)
    // setResult(text)
  }, [clickValue])

  useEffect(() => {
    setClickValue(result)
  }, [result])

  const addString = (value: string) => {
    if(isNumber(value)) {
      setResult(stringConcat(value))
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
            <BaseButton name={'C'} background={'lightGrey'} setClickValue={setClickValue} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'+/-'} background={'lightGrey'} setClickValue={setClickValue} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'%'} background={'lightGrey'} setClickValue={setClickValue} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'7'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'8'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'9'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'4'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'5'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'6'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'1'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'2'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid item xs={4} className={classes.btnPadding}>
            <BaseButton name={'3'} background={'grey'} setClickValue={addString} />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={8} className={classes.btnPadding}>
              <BaseButton name={'0'} background={'grey'} size={'lg'} setClickValue={addString} />
            </Grid>
            <Grid item xs={4} className={classes.btnPadding}>
              <BaseButton name={'.'} background={'grey'} setClickValue={addString} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={3}>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'÷'} background={'orange'} setClickValue={setClickValue} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'×'} background={'orange'} setClickValue={setClickValue} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'-'} background={'orange'} setClickValue={setClickValue} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'+'} background={'orange'} setClickValue={setClickValue} />
            </Grid>
            <Grid item xs={12} className={classes.btnPadding}>
              <BaseButton name={'='} background={'orange'} setClickValue={setClickValue} />
            </Grid>
          </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Calculator