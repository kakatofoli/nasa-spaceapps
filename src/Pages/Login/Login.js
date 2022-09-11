import { useContext, useState } from "react";
import "./Login.css";
import logo from '../../assets/img/logo.png';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import * as Rotas from '../../constantes/routes';
import { ProjectContext } from "../../contexts/Project/ProjectsContext";


export default function Login() {

    const auth = useContext(AuthContext);
    const projectsProvider = useContext(ProjectContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        if(email && password){
            const isLogged = await auth.singIN(email, password);
            if(isLogged){
                projectsProvider.buscaProjetos(auth.user['id']);
                navigate(Rotas.HOME_LOGADO);
            }else{
                alert("Usuário ou senha incorretos")
            }
        }
    }
    

    return (
        <div className="general-container">
            <div className="container-login">
                <div className="image-text-side-form">
                    <img className="image-side-form"  src={logo} alt="Logo Space apps"/>
                    <h1 className="text-title-side-form">Sistema de avaliação de projetos</h1>
                    <h3 className="text-subTitle-side-form">NASA Space apps 2022 - Curitiba</h3>
                </div>
                <div className="wrap-login">
                    <span className="login-form-title">
                        Acesso ao sistema
                    </span>
                    <form className="login-form">
                        <div className="wrap-input">
                            <input 
                                className={email !== "" ? "input-login-form has-value" : "input-login-form"}
                                type='email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <span className="focus-input" data-placeholder="E-mail"></span>
                        </div>
                        <div className="wrap-input">
                            <input 
                                className={password !== "" ? "input-login-form has-value" : "input-login-form"}
                                type='password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={handleSubmit}>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}