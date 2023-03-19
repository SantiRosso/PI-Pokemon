import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext.js";
import { showMessage } from "../../../ShowMessage.js"
//styles
import s from "./Register.module.css"
//components
import Button from "../../Button/Button"
import Input from "../../Input/Input"
//images
import pokedex from "../../Home/images/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png"
import Footer from "../../Footer/Footer.jsx";

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
        <div>
            <Button name="Home" route="/home" />
            <div className={s.container}>
                <div className={s.title}>
                    <img src={pokedex} alt="Pokedex" /> 
                </div>
                <form
                className={s.form}
                onSubmit={handelSubmitRegister}
                >
                    <div className={s.email}>
                        <label className={s.title} htmlFor="email">Email:</label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            onChange={handleChangeRegister}
                            requided
                        />
                    </div>
                    <div className={s.password}>
                        <label className={s.title}  htmlFor="password">Password:</label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="******"
                            onChange={handleChangeRegister}
                            requided
                        />
                    </div>
                    <Button name="Register" type="submit"/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;