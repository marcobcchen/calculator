import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

interface IProps{
  result: string
}

const useStyles = makeStyles(theme => ({
  count: {
    fontSize: '70px',
    transformOrigin: '100% 100%',
    width: '100%',
  }
}))

const Count = (props:IProps) => {
  const classes = useStyles()
  const [ratio, setRatio] = useState(1)

  useEffect(() => {
    function onResize(){
      if(window.innerWidth >= 500){
        setRatio(1)
      } else if(window.innerWidth <= 350){
        setRatio(350 / 500)
      } else{
        setRatio(window.innerWidth / 500)
      }
    }
    window.addEventListener('resize', onResize)
    onResize()
  }, [])

  return(
    <Typography align='right' className={classes.count} style={{transform: 'scale('+ ratio +')'}}>
      {props.result}
    </Typography>
  )
}
export default Count