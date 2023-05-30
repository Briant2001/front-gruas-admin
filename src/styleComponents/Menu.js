import styled, { css } from "styled-components";
import logo from '../assest/logo-gruas.png'
import {Link } from "react-router-dom";

const colors = {
    fondo:"#00161C"
}
const ContentMenu = styled.div`


`;
const Img = styled.div`
    
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 135px;
    height: 100%;
    background-size: 100%;
    background-position: center;
    cursor: pointer;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

`;
const Li = styled(Link)`
    margin-right:40px ;     
    list-style: none;
    cursor: pointer;
    padding: 5px;
    
    border-radius:3px ;
    text-decoration: none;
    color: #fff;
    &:hover{
        border-bottom: 3px solid #636363;
        //color: #636363;
    }

        /* ${(props) => {
            switch (props.to) {
                case "/":
                    return css`
                        &{border: none;}
                        &&{border-bottom:${border} ;}
                    `;
                case "/Servicios":
                    return css`
                        &{border: none;}
                        &&{border-bottom:${border} ;}
                    `;
                default:
                        return css`
                            &{border-bottom:none ;}

                    `;
            }
        }} */
        /* ${props => props.border==="true" && css`
            &{border: none;}
            &&{border-bottom:${border} ;}

        `}
        ${props => props.border==="true" && css`
            &{border: none;}
            &&{border-bottom:${border} ;}

        `} */
    
    
`;
const border = " 3px solid #fff !important";

const LiRedes = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 5px;
    border: none  ;
    background: red;
    text-align: center;
    display: flex;
    justify-content: center;
    &:hover{
        background:#cdcdcd;
        color: #636363;
    }
    
    &:nth-child(1){
        background:  #3b5998;
        margin-right: 10px;
    }
    &:nth-child(2){
        background: #128C7E;
    }


`;



export {Img,Li,LiRedes,Ul,}