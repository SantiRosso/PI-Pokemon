import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext.js";
import { showMessage } from "../../../ShowMessage.js"

const Register = () => {

    const { signup } = useAuth();
    const navigate = useNavigate()

    const [userRegister, setUserRegister] = useState({
        email: "",
        password: "",
    });

    const handleChangeRegister = (e) => {
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value,
        });
    };

    const handelSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const credentials = await signup(
                userRegister.email,
                userRegister.password
            );

            window.localStorage.setItem("token", credentials._tokenResponse.idToken);

            showMessage("Welcome " + userRegister.email, "success");

            navigate("/home");
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                showMessage("Invalid email", "error");
            } else if (error.code === "auth/weak-password") {
                showMessage("Password is too weak", "error");
            } else if (error.code === "auth/email-already-in-use") {
                showMessage("Email already in use", "error");
            } else if (error.code) {
                showMessage("Something went wrong", "error");
            }
        }
    };

    return(
        <form
              className="form"
              onSubmit={handelSubmitRegister}
            >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                onChange={handleChangeRegister}
                requided
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="******"
                onChange={handleChangeRegister}
                requided
              />
              <button type="submit">Register</button>
        </form>
    )
}

export default Register;