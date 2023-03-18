import { useState } from "react";
import { useAuth } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../ShowMessage.js"
//styles
import s from "./Login.module.css"

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
        <form onSubmit={handelSubmitLogin}>
          <div className={s.email}>
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                onChange={handleChangeLogin}
                requided
              />
          </div>
          <div className={s.password}>
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="******"
                onChange={handleChangeLogin}
                requided
              />
          </div>
          <button type="submit">LogIn</button>
        </form>
        <button type="button" onClick={handleGoogleLogin}>
        Login with Google
        </button>
        <button
          type="button"
          onClick={handleFacebookLogin}
        >
        Login with Facebook
        </button>
        <button type="button" onClick={handleGithubLogin}>
        Login with Github
        </button>
        <a href="#!" onClick={handleResetPassword}>
          Forgot your password?
        </a>
      </div>
    )
}

export default Login;