import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { Background } from "../styleComponents/styles";
import { Card, Contenedor,DivLabel,H1,P,IconDiv, Titulo,BoxShadow, DivButton, Button } from "../styleComponents/Login";
import { ComponentsInput } from "./Input";
import { Formulario, MnesajeError } from "../styleComponents/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Login = ()=>{
    const expresiones = {
        //pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/, // Letras y espacios, pueden llevar acentos.
        pass:/ /,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const [user,setUser]= useState({
        email:"",
        password:""
    })
    
    const [correo,setCorreo] = useState({campo:'',valido:null});
    const [pass,setPass] = useState({campo:'',valido:null});

    const {login,loginWithGoogle,resetPass}= useAuth()

    const navigate = useNavigate()
    const [error,setError]=useState(null);

    
    // const handleChange = ({target:{name,value}})=>{
    //     setUser({...user,[name]:value})
    // }
    const handleSubmit= async(e)=>{
        console.log(user.email,user.password);
        e.preventDefault();
        setError('')
        try{
            const result = await login(user.email,user.password);
            navigate('/home')
        }catch(error){
            if(error.code === "auth/user-not-found"){
                setError("Usuario no existente")
            }
            if(error.code === "auth/weak-password"){
                setError("Contraseña no segura")
            } if(error.code === "auth/invalid-email"){
                setError("Correo invalido")
            } if(error.code === "auth/missing-password"){
                setError("Contraseña faltante")
            } if(error.code ==="auth/wrong-password"){
                setError("Contraseña incorrecta")
            }
            if(error.code ==="auth/network-request-failed"){
                setError("Sin conexion a internet")
            } 
            
        }
    

    }
    const handleGoogle =async()=>{
        try {
            await loginWithGoogle()
            navigate("/home")
        } catch (error) {
            setError(error.message)
        }
    }
    const resetPassword = async()=>{
        if (!user.email) {
            setError("Ingresa un correo")
        }else{
            setError(null);
            try {
                await resetPass(user.email);
            setError("Hemos enviado un correo con un enlace para restablecer su contraseña ")

            } catch (error) {
                setError(error.message)
            }
        }
    }
    return(
        <Background>
            <Contenedor>
            
                <BoxShadow>
                
                <Card>
                    <DivLabel>
                        <Titulo>Inicio</Titulo>
                        {
                            error  &&
                            <MnesajeError>
                                <p>
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                    <b>Error:</b> {error}
                                </p>
                            </MnesajeError>
                        }
                    </DivLabel>
                    <Formulario onSubmit={handleSubmit}>
                        <ComponentsInput
                            title="Ingrese el correo"
                            estado={correo}
                            setEstado={setCorreo}
                            setUser={setUser}
                            user={user}
                            tipo="email"
                            label="Email:"
                            placeholder="youremail@compay.com"
                            name="email"
                            leyendaError="Formato de Email incorrecto"
                            expresion={expresiones.correo}
                            //onChange={handleChange}
                        />
                        <ComponentsInput
                            title="Ingrese su contraseña"
                            estado={pass}
                            setEstado={setPass}
                            setUser={setUser}
                            user={user}
                            tipo="password"
                            label="Contraseña:"
                            placeholder="Ingrese su Contraseña"
                            name="password"
                            leyendaError="Formato de Contraseña incorrecto"

                            //onChange={handleChange}
                        />
                    {/* <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="youremail@compay.com"
                        onChange={handleChange}
                    /> */}

                    {/* <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        onChange={handleChange}
                        placeholder="******"
                    /> */}
                    <DivButton>
                        <Button>Login</Button>
                    </DivButton>

                    </Formulario>
                    <DivButton>
                        <Button tipo="secundario" onClick={handleGoogle}>Google</Button>
                    </DivButton>
                </Card>
                <IconDiv>
                    <H1>Gruas Arreola Administrador</H1>
                    <a href="#" onClick={resetPassword}>
                        <P>Olvide mi contraseña</P>
                    </a>
                    <Link style={{textAlign:"center",textDecoration:"underline"}} to="/register">Registrarme</Link>
                </IconDiv>
                </BoxShadow>
            </Contenedor>
        </Background>
    )
}
export {Login};