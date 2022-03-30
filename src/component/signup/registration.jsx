import React, { useState } from 'react'
import './registration.css'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

import { registartion, setRegistrationInfo } from './registrationAction'
import { useDispatch } from 'react-redux';
function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

export default function Registration() {
  const dispatch =  useDispatch()
  const [firstName, setFirstName] = useState('')
  const [firstNameFlag, setFirstNameFlag] = useState(false)
  const [firstNameErrorMsg, setFirstNameErrorMsg] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameFlag, setlastNameFlag] = useState(false)
  const [lastNameErrorMsg, setlastNameErrorMsg] = useState('')

  const [email, setEmail] = useState('')
  const [emailFlag, setEmailFlag] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')

  const [password, setPassword] = useState('')
  const [passwordFlag, setPasswordFlag] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordFlag, setConfirmPasswordFlag] = useState(false)
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const [snackMessage, setSnackMessage] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackType, setSnackType] = useState('')




  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  }
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value)
  }
  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }
  const ConfirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value)
  }
  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }
  const snackBarHandler = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setSnackBarOpen(false)
  }

  const validateForm = () => {
    let isError = false;
    if (!/[a-zA-Z._]$/.test(firstName)) {
      setFirstNameFlag(true)
      setFirstNameErrorMsg("Enter valid name")
      isError = true
    }
    if (firstName.length === 0) {
      setFirstNameFlag(true)
      setFirstNameErrorMsg("Enter First name")
      isError = true
    }
    if (lastName.length === 0) {
      setlastNameFlag(true)
      setlastNameErrorMsg("Enter Last name")
      isError = true
    }
    if (!/[a-zA-Z._]$/.test(lastName)) {
      setlastNameFlag(true)
      setlastNameErrorMsg("Enter valid name")
      isError = true
    }
    if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(email)) {
      setEmailFlag(true)
      setEmailErrorMsg("Enter valid email id")
      isError = true
    }

    if (email.length === 0) {
      setEmailFlag(true)
      setEmailErrorMsg("choose fundoo email id")
      isError = true
    }
    if (password.length === 0) {
      setPasswordFlag(true)
      setPasswordErrorMsg("Enter a password")
      isError = true
    }

    if (password.length > 11) {
      setPasswordFlag(true)
      setPasswordErrorMsg("password is too Long")
      isError = true
    }

    if (password !== confirmPassword) {
      setConfirmPasswordFlag(true)
      setConfirmPasswordErrorMsg("Passwords didn't match")
      isError = true

    }
    return isError
  }
  const formSubmitHandler = async (event) => {
    const err = validateForm()
    if (!err) {
      console.log('Calling Api');
      const response = await registartion(firstName, lastName, email, password,dispatch)
      console.log('reg response', response);
      if ((response).status === 200) {
        setSnackBarOpen(true)
        setSnackType('success')
        setSnackMessage('passed')
      }
      else {
        setSnackBarOpen(true)
        setSnackType('error')
        setSnackMessage('failed with invalid data')

      }
    }
    else {
      console.log('failed');
      setSnackBarOpen(true)
      setSnackType('error')
      setSnackMessage('invalid cred')
    }
  }
  return (
    <div className="registrationContainer">
      <div className="registrationContainerBox">
        <div className="registrationContainerHeader">
          <span className="registrationInlineTitle">
            <b>
              <font color="#1976d2">F</font>
              <font color="#e53935">u</font>
              <font color="#ffb74d">n</font>
              <font color="#1976d2">d</font>
              <font color="#388e3c">o</font>
              <font color="#e53935">o</font>
            </b>
          </span>
          <div className="registrationContainerHeaderText">Create your Fundoo Account</div>
          <div className="formContainer">
            <form className="form">

              <div className="formInput">
                <div className="formInputField">
                  <TextField
                    name="firstName"
                    onChange={firstNameChangeHandler}
                    value={firstName}
                    error={firstNameFlag}
                    helperText={firstNameErrorMsg}
                    label="First Name"
                    size="small"
                    variant="outlined"
                    fullWidth />
                </div>
                <div className="formInputField">
                  <TextField
                    name="lastName"
                    onChange={lastNameChangeHandler}
                    value={lastName}
                    error={lastNameFlag}
                    helperText={lastNameErrorMsg}
                    label="Last Name"
                    size="small"
                    variant="outlined"
                    fullWidth />
                </div>
              </div>

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
                <div className="formInputField">
                  <TextField
                    name="confirmPassword"
                    value={confirmPassword}
                    helperText={confirmPasswordErrorMsg}
                    error={confirmPasswordFlag}
                    onChange={ConfirmPasswordChangeHandler}
                    label="confirm password"
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
                  // onClick = {()=>this.nextPath('/login')}
                  >
                    <b>Sign in insted</b>
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
            <div className="regImg">
              <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="google imge" />
              <p className="imgText">
                One account. All of Fundoo working for you.
              </p>
            </div>
          </div>
        </div>
        <div className="snackbar">
          <Snackbar
            open={snackBarOpen}
            autoHideDuration={5000}
            onClose={snackBarHandler}
          >
            <Alert severity={snackType}>{snackMessage}</Alert>
          </Snackbar>
        </div>
      </div>

    </div>
  )
}
