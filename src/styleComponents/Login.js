import styled, { css } from "styled-components";


const Contenedor = styled.div`

    padding: 100px 0 0 0 ;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const DivLabel = styled.div`
    padding: 20px;
    color: #ccc;    
    text-align: center;


`;
const Titulo = styled.h2`
    font-size: 25px;
    font-weight: 700;

`;

const IconDiv = styled.div`
    width: 350px;
    color: #ccc;
    background: #548490;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
`;
const H1 = styled.h1`
    font-size: 35px;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;

`;
const P = styled.p`
    font-weight: 400;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
`;
const Card = styled.div`

    width: 450px;
    min-width: 250px;    
    background: #104350;

`;
const BoxShadow = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid rgba(238, 238, 238,0.5);

`;

const DivButton =styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
`;

const Button = styled.button`
    background: #548490;
    padding: 10px;
    width: 200px;
    font-weight: 700;
    color: #ccc;
    cursor: pointer;
    ${props => props.tipo && css`
        background: #104350;

    `}
`;

export {Card,Contenedor,DivLabel,Titulo,IconDiv,H1,P,BoxShadow,DivButton,Button}