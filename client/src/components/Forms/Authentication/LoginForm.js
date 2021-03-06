import React from 'react'
import PropTypes from 'prop-types'
import Card, {CardContent} from 'material-ui/Card'
import {withStyles} from 'material-ui/styles'
import Input, {InputLabel} from 'material-ui/Input'
import {FormControl, FormHelperText} from 'material-ui/Form'
import Button from 'material-ui/Button/Button'
import Typography from 'material-ui/Typography/Typography'
import Divider from 'material-ui/Divider/Divider'
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import stylesBase from './Styles/stylesBase'
import red from 'material-ui/colors/red'
 
let LoginForm = ({onSubmit, onChange, controls, classes, clickedSwitchForm, disabled}) => (
  <Card className={classes.container}>
    <CardContent className={classes.cardContent}>
      <form action="/" onSubmit={onSubmit} className={classes.form}>

        <Typography type="title" color="primary" gutterBottom>
          Login
        </Typography>

        <AccountBoxIcon className={classes.icon}/>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <Input
            id="email-input"
            name="email"
            value={controls.email.value}
            onChange={(event) => onChange(event, 'email')}
            type="email"/> 
            {controls.email.errors.message && (
                <FormHelperText id="email-input-text" style={{color: red[500]}}>
                  {controls.email.errors.message}
                </FormHelperText>
              )
            }
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            name="password"
            value={controls.password.value}
            onChange={(event) => onChange(event, 'password')}
            type="password"/>
            {controls.password.errors.message && (
                <FormHelperText id="password-input-text" style={{color: red[500]}}>
                  {controls.password.errors.message}
                </FormHelperText>
              )
            }
        </FormControl>

        <div className={classes.boxMarginTop}>
          <Button raised color="primary" type="submit" disabled={disabled}>
            Log in
          </Button>
        </div>
      </form>
    </CardContent>
    <Divider/>
    <div className={classes.boxMarginTop}>
      <Typography type="body1" color="inherit">
        Don't have an account?
      </Typography>
      <Button
        raised
        color="secondary"
        size="small"
        className={classes.swithFormButton}
        onClick={clickedSwitchForm}>
        Create one
      </Button>
    </div>
  </Card>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  controls: PropTypes.object.isRequired,
  clickedSwitchForm: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default withStyles(stylesBase)(LoginForm)