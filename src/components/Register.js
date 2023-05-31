import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { Background } from "../styleComponents/styles";
import { BoxShadow, Button, Card, Contenedor, DivButton, DivLabel, H1, IconDiv, P, Titulo } from "../styleComponents/Login";
import { Formulario, MnesajeError } from "../styleComponents/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentsInput } from "./Input";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import register from "../assest/register.jpg"
const Register = ()=>{
    const expresiones = {
        pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/, // Letras y espacios, pueden llevar acentos.
        //pass:/ /,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const [correo,setCorreo] = useState({campo:'',valido:null});
    const [pass,setPass] = useState({campo:'',valido:null});

    const [user,setUser]= useState({
        email:"",
        password:""
    })
    const {signup}= useAuth()
    const navigate = useNavigate()
    const [error,setError]=useState(null);

    // const handleChange = ({target:{name,value}})=>{
    //     setUser({...user,[name]:value})
    // }
    const handleSubmit= async(e)=>{
        e.preventDefault();
            setError('')
            try{
                const result = await signup(user.email,user.password);
                navigate('/home')
            }catch(error){
                if(error.code==="auth/invalid-email"){
                    setCorreo("Correo invalido")
                }
                if (error.code === "auth/email-already-in-use") {
                    setError("Este correo ya esta en uso");
                } if(error.code === "auth/weak-password"){
                    setError("Contraseña no segura")
                } if(error.code === "auth/missing-password"){
                    setError("Contraseña faltante")
                }
                if(error.code ==="auth/network-request-failed"){
                    setError("Sin conexion a internet")
                } 
            }
    

    }
    return(
        <Background>
            <Contenedor>
            
                <BoxShadow>
                
                <Card>
                    <DivLabel>
                        <Titulo>Registro</Titulo>
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
                            leyendaError="Minimo 8 caracteres
                            Maximo 15
                            Al menos una letra mayúscula
                            Al menos una letra minucula
                            Al menos un dígito
                            No espacios en blanco
                            Al menos 1 caracter especial"
                            expresion={expresiones.pass}
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
                </Card>
                <IconDiv>
                    <H1>Gruas Arreola   </H1>
                    <Link style={{textAlign:"center",textDecoration:"underline"}} to="/login">¿Ya tienes una cuenta?</Link>

                    <img src={register} style={{background:"transparent"}}/>
                </IconDiv>
                </BoxShadow>
            </Contenedor>
        </Background>
        // <div>
        //     {error && <Alert message={error}/>}
        //     <form onSubmit={handleSubmit}>
        //     <label htmlFor="email">Email</label>
        //     <input type="email" name="email" placeholder="youremail@compay.com"
        //         onChange={handleChange}
        //     />

        //     <label htmlFor="password">Password</label>
        //     <input type="password" name="password" id="password"
        //         onChange={handleChange}
        //         placeholder="******"
        //     />
        //     <button>Registrar</button>
        // </form>
        // </div>
    )
}
export {Register};