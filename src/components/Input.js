import {faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { GroupInput, IconValidetion, Input, Label, LeyendError,ContenedorTerminos,ContentComponents } from '../styleComponents/Formulario';
import { useState } from 'react';
//import { validacionRFC } from './validacionRcf';

const ComponentsInput = ({title,estado, setEstado,setUser,user,tipo,label,placeholder,name,leyendaError,expresion,validacionRFC})=>{
    
    const handleChange = ({target:{name,value}})=>{
        setEstado({campo:value});
        setUser({...user,[name]:value})
    }

    const validationExpression = ()=>{
        if(expresion){
            if(expresion.test(estado.campo)){
                setEstado({...estado,valido:"true"})
            }else{    
                setEstado({...estado,valido:"false"})
                console.log("No valido");
            }
        
        }else{
            setEstado({...estado,valido:"true"})
        }
    }
    return (
        <ContentComponents>
            <Label valido={estado.valido} htmlFor={name} >{label}</Label>
            <GroupInput>
                <Input 
                    title={title}
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={handleChange}
                    onKeyUp={validationExpression}
                    onBlur={validationExpression}
                    autoComplete='on'
                    valido={estado.valido}
                    name={tipo}
                />
                <IconValidetion
                    icon={estado.valido === "true" ?faCircleCheck :faCircleXmark}
                    valido={estado.valido}
                />

            </GroupInput>
            <LeyendError valido={estado.valido} >{leyendaError}</LeyendError>
        </ContentComponents>
    )
}
const ComponentInputCheck = ({type,estado,setEstado,name})=>{
    const onChangeTerminos =(e)=>{
        setEstado(e.target.checked)
    }
    return(
        <>
            <ContenedorTerminos>
                <Label htmlFor={name} >
                    <input 
                        type={type}
                        name={name}
                        id={name} 
                        checked={estado}
                        onChange={onChangeTerminos}
                    />
                    Acepto los Terminos y Condiciones
                </Label>
            </ContenedorTerminos>
        </>
    )
}
export {ComponentsInput, ComponentInputCheck}