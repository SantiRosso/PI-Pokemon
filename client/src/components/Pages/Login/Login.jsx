import { useState } from "react";
import { useAuth } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../ShowMessage.js"

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

    return(
        <form onSubmit={handelSubmitLogin}>
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                onChange={handleChangeLogin}
                requided
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="******"
                onChange={handleChangeLogin}
                requided
              />
              <button type="submit">LogIn</button>
        </form>
    )
}

export default Login;