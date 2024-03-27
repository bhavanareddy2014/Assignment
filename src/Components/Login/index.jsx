import React, { useRef, useState, useEffect } from "react";
import { ErrorMessage, LoginContainer, TitleRegister,Label, FormContainer, Input, UserErrMessage,UserSpan, Button, MainContainer, ButtonContainer } from "./login";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
const userNameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>.])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{8,24}$/;
  const cookies = new Cookies();
  

const Login = () => {
    const userRef = useRef();
    const errRef =  useRef();
    const navigate = useNavigate();
    const [userName,setUserName] =  useState("");
    const [validName,setValidName] =  useState(false);
    const [userFocus,setUserFocus] =  useState(false);
    const [password,setPassword] =  useState("");
    const [validPassword,setValidPassword] =  useState(false);
    const [passwordFocus,setPasswordFocus] =  useState(false);
    const [errMessage,setErrMessage] =  useState("");
    const [success , setSuccess] = useState(false);

    useEffect(() => {
       userRef.current.focus();
    },[])

    useEffect(() => {
     const result = userNameRegex.test(userName);
     setValidName(result)
    },[userName])

    useEffect(() => {
      const result = passwordRegex.test(password);
      console.log(result);
      console.log(password);
      setValidPassword(result);
      
  },[password])

    useEffect(() => {
        setErrMessage("")
    },[userName,password])

    const handleLogin = (username, password) => {
      if (username === "bhavana" && password === "Bhavana@98") {
          const cookieExpiry = new Date();
          cookieExpiry.setTime(cookieExpiry.getTime() + 1 * 60 * 1000); // one minute expiry
          cookies.set('loggedIn', 'true', { expires: cookieExpiry });
          setSuccess(true);
          navigate('/dashboard');
      } else {
          setErrMessage("Invalid username or password");
      }
  };


  useEffect(() => {
    const loggedIn = cookies.get('loggedIn');
    if (loggedIn === 'true') {
        setSuccess(true);
        const expiryTimeout = setTimeout(() => {
            cookies.remove('loggedIn');
            setSuccess(false);
        }, 1 * 60 * 1000); // 1 minute expiry

        return () => clearTimeout(expiryTimeout);
    } else {
        setSuccess(false);
    }
}, [cookies]);


  

  const handleLogout = () => {
    // Remove the cookie to log out
    cookies.remove('loggedIn');
};



useEffect(() => {
  // Check if user is already logged in
  const loggedIn = cookies.get('loggedIn');
  if (loggedIn === 'true') {
      setSuccess(true);
  }
}, []);

useEffect(() => {
  // Update success state based on login/logout
  const loggedIn = cookies.get('loggedIn');
  if (loggedIn === 'true') {
      setSuccess(true);
  } else {
      setSuccess(false);
  }
}, [cookies]);

    
  return  (
    <LoginContainer>
      <ErrorMessage ref={errRef} aria-live="assertive">{errMessage}</ErrorMessage>
       <TitleRegister>Login</TitleRegister>
       <FormContainer>
  <Label htmlFor="username">UserName
  </Label>
  <Input
    type="text"
    id="username"
    ref={userRef}
    autoComplete="off"
    onChange={(e) => setUserName(e.target.value)}
    required
    aria-invalid={validName ? true : false}
    aria-describedby="uidnote"
    onFocus={() => setUserFocus(true)}
    onBlur={() => setUserFocus(false)}
  />
  <UserErrMessage className={ userFocus && userName && !validName ? 'invalid' : 'valid'} >{
     "4 to 24 characters , Begin with a letter Letters,numbers,underscores,hypens allowed"
    }</UserErrMessage>
    <Label htmlFor="password">Password
  </Label>
     <Input
    type="password"
    id="password"
    ref={userRef}
    autoComplete="off"
    onChange={(e) => setPassword(e.target.value)}
    required
    aria-invalid={validPassword ? true : false}
    aria-describedby="pwdnote"
    onFocus={() => setPasswordFocus(true)}
    onBlur={() => setPasswordFocus(false)}
  />
  <UserErrMessage className={ passwordFocus && password && !validPassword ? 'invalid' : 'valid'} >{
     "4 to 24 characters , Must include uppercase and  lowercase  Letters, a number, a special character"
    }</UserErrMessage>
  <ButtonContainer>
                {success ? (
                    <Button onClick={handleLogout}>Log Out</Button>
                ) : (
                    <Button
                        disabled={!validName || !validPassword}
                        onClick={ () => handleLogin(userName,password)}
                    >
                        Log In
                    </Button>
                )}
            </ButtonContainer>
</FormContainer>
    </LoginContainer>
  )
};

export default Login;
