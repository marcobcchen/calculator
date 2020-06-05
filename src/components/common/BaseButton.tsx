import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  greyBtn: {
    ...theme.custom.btn,
    background: theme.palette.grey[800],
    color: theme.palette.common.white,
    // '& :hover': {
    //   background: 'rgba(255, 255, 255, 0.9)',
    // }
  },
  lightGreyBtn: {
    ...theme.custom.btn,
    background: theme.palette.grey[500],
    color: theme.palette.grey[800]
  },
  orangeBtn: {
    ...theme.custom.btn,
    background: theme.palette.common.orange,
    color: theme.palette.common.white
  },
  bb: {
    // background: '#fff000',
    // '& :hover': {
    //   background: 'rgba(210, 255, 255, 0.9)',
    // }
  },
  btnLabel: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY:(-50%)'
    // '& :hover': {
    //   background: 'rgba(210, 255, 255, 0.9)',
    // }
  }
}))

interface IBaseButton{
  name: string
  background: string
}

const BaseButton = (props:IBaseButton) => {
  const classes = useStyles()

  return(
    <Button 
      disableRipple
      className={ 
        props.background === 'lightGrey' ? classes.lightGreyBtn : undefined ||
        props.background === 'grey' ? classes.greyBtn : undefined ||
        props.background === 'orange' ? classes.orangeBtn : undefined 
      }
      classes={{label: classes.btnLabel, root: classes.bb}}
    >
      {props.name}
    </Button>
  )
}

export default BaseButton