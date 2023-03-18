import { useState } from "react";
import { useAuth } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../ShowMessage.js"
//styles
import s from "./Login.module.css"
//components
import Button from "../../Button/Button"
import Button2 from "../../Button2/Button2"
import Input from "../../Input/Input"
//images
import pokedex from "../../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"

const Login= () => {

    const {
        login,
        user,
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub,
        resetPassword,
    } = useAuth();
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    //login with email and password
    const handleChangeLogin = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
          });
    }  

    const handelSubmitLogin = async (e) => {
        e.preventDefault();
        try {
          const credentials = await login(userLogin.email, userLogin.password);
    
          window.localStorage.setItem("token", credentials._tokenResponse.idToken);
    
          showMessage("Welcome " + userLogin.email, "success");
    
          navigate("/home");
        } catch (error) {
          if (error.code === "auth/wrong-password") {
            showMessage("Wrong password", "error");
          } else if (error.code === "auth/user-not-found") {
            showMessage("User not found", "error");
          } else {
            showMessage("Something went wrong", "error");
          }
        }
      };

      //login with google
      const handleGoogleLogin = async () => {
        try {
          const credentials = await loginWithGoogle();
          window.localStorage.setItem("token", credentials._tokenResponse.idToken);
          showMessage("Welcome " + credentials.user.displayName, "success");
        } catch (error) {
          showMessage(error.code, "error");
        }
      }

      //login with Facebook
      const handleFacebookLogin = async () => {
        try {
          const credentials = await loginWithFacebook();
          window.localStorage.setItem("token", credentials._tokenResponse.idToken);
          showMessage("Welcome " + credentials.user.displayName, "success");
        } catch (error) {
          showMessage(error.code, "error");
        }
      };

      //Github
      const handleGithubLogin = async () => {
        try {
          const credentials = await loginWithGithub();
          window.localStorage.setItem("token", credentials._tokenResponse.idToken);
          showMessage("Welcome " + credentials.user.displayName, "success");
        } catch (error) {
          showMessage(error.code, "error");
        }
      };

      //handleResetPassword
      const handleResetPassword = async () => {
        if (!userLogin.email) {
          showMessage("Please, enter your email", "error");
        } else {
          try {
            await resetPassword(userLogin.email);
            showMessage("Check your email for a password reset link", "success");
          } catch (error) {
            showMessage(error.code, "error");
          }
        }
      };   

    return(
      <div className={s.container}>
        <h1>Login</h1>
        <form className={s.form} onSubmit={handelSubmitLogin}>
          <div className={s.email}>
            <label htmlFor="email">Email:</label>
              <Input
                type="email"
                name="email"
                placeholder="example@email.com"
                onChange={handleChangeLogin}
                requided
              />
          </div>
          <div className={s.password}>
            <label htmlFor="password">Password:</label>
              <Input
                type="password"
                name="password"
                placeholder="******"
                change={handleChangeLogin}
                requided
              />
          </div>
          <Button name="LogIn" type="submit"/>
        </form>
        <Button2 name="Login with Google" type="button" click={handleGoogleLogin}/>
        <Button2
          name="Login with Facebook"
          type="button"
          click={handleFacebookLogin}/>
        <Button2 name="Login with Github" type="button" click={handleGithubLogin}/>
        <a href="#!" onClick={handleResetPassword}>
          Forgot your password?
        </a>
      </div>
    )
}

export default Login;