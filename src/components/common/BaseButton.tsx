import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  greyBtn: {
    ...theme.custom.btn,
    background: theme.palette.grey[800],
    color: theme.palette.common.white
  },
  lightGreyBtn: {
    ...theme.custom.btn,
    background: theme.palette.grey[500],
    color: theme.palette.grey[800]
  },
  orangeBtn: {
    ...theme.custom.btn,
    background: theme.palette.common.orange,
    color: theme.palette.common.white,
  },
  btnContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
  },
  btnContainerLg: {
    position: 'relative',
    width: '100%',
    paddingBottom: 'calc(50% - 8px)',
  },
  rootBtn: {
    [theme.breakpoints.down(450)]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '1.5rem',
    },
    '&:hover': {
      background: theme.palette.common.lightGreen,
    },
  }
}))

interface IBaseButton{
  name: string
  background: string
  size?: string
  onClick: (value: string) => void
}

const BaseButton = (props:IBaseButton) => {
  const classes = useStyles()

  return(
    <div 
      className={
        props.size === 'lg' ? classes.btnContainerLg : classes.btnContainer
      }
    >
      <Button 
        disableRipple
        className={ 
          props.background === 'lightGrey' ? classes.lightGreyBtn : undefined ||
          props.background === 'grey' ? classes.greyBtn : undefined ||
          props.background === 'orange' ? classes.orangeBtn : undefined 
        }
        classes={{root: classes.rootBtn}}
        onClick={() => props.onClick(props.name)}
      >
        {props.name}
      </Button>
    </div>
  )
}

export default BaseButton