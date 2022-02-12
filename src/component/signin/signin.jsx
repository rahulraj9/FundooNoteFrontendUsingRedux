import React, { useState } from 'react';
import './signIn.css'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

export default function Signin() {


  const [email, setEmail] = useState('')
  const [emailFlag, setEmailFlag] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [password, setPassword] = useState('')
  const [passwordFlag, setPasswordFlag] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const[snackType,setSnackType] = useState('')
  


  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }
  const validateForm = () => {
    // Email Validation
    let isError = false
    setEmailFlag(false)
    setEmailErrorMsg("")
    // Case:1
    if (email.length === 0) {
      setEmailFlag(true)
      setEmailErrorMsg("Choose a Fundoo Mail")
      isError = true
    }
    //Case:2
    if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(email)) {
      setEmailFlag(true)
      setEmailErrorMsg("Enter valid email id")
      isError = true
    }
    //Case:1
    if (password.length < 6) {
      setPasswordFlag(true)
      setPasswordErrorMsg("password is too short")
      isError = true
    }
    // case: 2
    if (password.length > 11) {
      setPasswordFlag(true)
      setPasswordErrorMsg("password is too long")
      isError = true
    }
    return isError
  }
  const showPasswordHandler = () => {
    setShowPassword(true)
  }
  const snackBarHandler = (event,reason) => {
    if(reason == "clickaway"){
      return
    }
    setSnackBarOpen(false)
  }
  const formSubmitHandler = (event) => {
    const err = validateForm()
    console.log(err);
    if (!err) {
      console.log('Api calling');
      setSnackBarOpen(true)
      setSnackType('success')
      setSnackMessage('passed')
    } else {
      console.log("reg failed")
      setSnackBarOpen(true)
      setSnackType('error')
      setSnackMessage('failed')

    }
  }
  return (
    <div className="loginContainer">
      <div className="loginContainerBox">
        <div className="loginContainerHeader">
          <span className="loginInlineTitle">
            <b>
              <font color="#1976d2">F</font>
              <font color="#e53935">u</font>
              <font color="#ffb74d">n</font>
              <font color="#1976d2">d</font>
              <font color="#388e3c">o</font>
              <font color="#e53935">o</font>
            </b>
          </span>
          <div className="loginContainerHeaderText">Sign In</div>
          <div className="loginContainerHeaderText1">Use your Fundoo Account</div>
          <div className="formContainer">
            <form className="form">
              <div className="formInput">
                <div className="formInputField">
                  <TextField
                    name="email"
                    value={email}
                    helperText={emailErrorMsg}
                    error={emailFlag}
                    onChange={emailChangeHandler}
                    label="Email"
                    size="small"
                    variant="outlined"
                    fullWidth />
                </div>
              </div>
              <div className="formInput">
                <div className="formInputField">
                  <TextField
                    name="password"
                    value={password}
                    helperText={passwordErrorMsg}
                    error={passwordFlag}
                    onChange={passwordChangeHandler}
                    id="password"
                    label="Password"
                    size="small"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    fullWidth />
                </div>
              </div>
              <span className="checkBoxInputs">
                <Checkbox
                  color="primary"
                  className="showPass"
                  onClick={showPasswordHandler}
                />
                Show Password
              </span>
              <div className="footerButtons">
                <div className="signInLink">
                  <Button
                    color="primary"
                  // onClick={() => this.nextPath('/forgotPassword')}
                  >
                    <b>Forget Password</b>
                  </Button>
                </div>
              </div>
              <div className="footerButtonsSign">
                <div className="signInLink">
                  <Button
                    color="primary"
                  // onClick={() => this.nextPath('/registration')}
                  >
                    <b>Create Account</b>
                  </Button>
                </div>
                <div className="nextButton">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={formSubmitHandler}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={5000}
          onClose={snackBarHandler}
        >
          <Alert severity={snackType}>{snackMessage}</Alert>
        </Snackbar>
      </div>
    </div>
  )
}
