import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = { 
    borde:"#0075FF",
    error:"#bb2929",
    exito:"#1ed12d",
    colorCenizaOscuro:"#4F4C4C",
    aviso:"rgba(0, 94, 77, 0.9);"
}



const Formulario = styled.form`
    padding: 10px;
    
`;

const ContentComponents =styled.div`
    -ms-flex: 1; /* IE 10 */
    flex: 1;
    
`;

const Label = styled.label`
        display: block;
        font-weight:600;
        padding:5px;
        min-height:20px;
        font-size: 14px;
        color: #ccc;
        cursor:pointer;
        ${props => props.valido === "false" && css`
            color:${colores.error}

        `}
`;
const GroupInput = styled.div`
    position: relative;
    margin: 0 25px;
`;

const Input=styled.input`
    width: 100%;
    background: transparent;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px;
    transition: .3s ease all;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    color: #eee;
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
    ${props => props.valido === "false" && css`
            border:1px solid ${colores.error};
            
    `}

`;
const LeyendError = styled.p`
    font-size: 12px;
    margin:2px;
    color: ${colores.error};
    visibility: hidden;
    ${props => props.valido === "false" && css`
    
        visibility: visible;

    `}
`;

const IconValidetion= styled(FontAwesomeIcon)`
    position: absolute;
    right:10px;
    bottom: 14px;
    z-index:100;
    font-size:16px;
    opacity:0;
    ${props => props.valido==="false" && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido==="true" && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;

const ContenedorTerminos = styled.div`
    
    input{
        margin-right:10px ;
    }
    @media (max-width :800px){
        grid-column :span 1;
    }
`;
const ContenedorBotonCent = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 60%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border:none;
    border-radius: 3px;
    cursor:pointer;
    transition: .1s ease all;
    margin: 0 auto;
    &:hover{
        box-shadow: 5px 0px 5px rgba(163,163,163,1);
    }
`;
const MnesajeError = styled.div`
    
    height: 100%;
    line-height:20px;
    background: #F66060;
    padding: 12px;
    font-size: 16px;
    borde-radius: 3px;
    p{
        margin: 0;
    }
    b{
        margin-left:10px;
    }
    ${props => props.grid=="1" && css`
        grid-column: 1 span;
        font-size: 15px;
        padding: 9px;
    `}
    ${props => props.grid=="2" && css`
        grid-column: 2 span;
        padding: 10px;
        font-size: 15px;
    `}
`;
export {
    ContentComponents,
    Formulario,
    Label,
    GroupInput,
    Input,
    LeyendError,
    IconValidetion,
    ContenedorTerminos,
    ContenedorBotonCent,
    Boton,
    MnesajeError
}