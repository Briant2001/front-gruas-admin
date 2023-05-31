import styled from "styled-components";

const Bienvenida = styled.div`

    font-size: 35px;
    font-weight: 700;
    color: #30383B;
`;
const DivCoten = styled.div`
    padding: 0;
    width: 75vw;
    
`;

const Main = styled.main`
    background: #DFE3F5;
    padding: 15px;
    height: 100%;
`; 
const ButtonLogout =styled.button`
    padding: 15px;
    display: flex;
    background:#30383B ;
    align-items: center;
    span{
        margin-right: .53rem;
    }

`;
export {Bienvenida,DivCoten, Main,ButtonLogout}