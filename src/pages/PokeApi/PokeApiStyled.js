import styled from "styled-components";

export const PokeContainer = styled.div`
    padding-top: 40px;
`

export const MainTitle = styled.h2`
    text-align: center; 
    margin-bottom: 20px;
    font-size: 46px;
    color: crimson;
`

export const InputStyled = styled.input`
    border: 2px double crimson;
    padding: 10px 40px;
    color: crimson;
    background-color: #151515;
    border-radius: 10px;
    font-size: 26px;
    &:hover{
        border-color: crimson;
    }
    @media (max-width: 768px){
        max-width: 680px;
        width: 100%;
    }
    @media (max-width: 480px){
        padding: 10px 20px;
        font-size: 20px;
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;
    @media (max-width: 768px){
        max-width: 680px;
        gap: 40px;
    }
    @media (max-width: 480px){
        max-width: 400px;
        padding: 10px 15px;
        gap: 30px;
    }
`

export const ButtonContainer = styled.button`
    border: 2px solid grey;
    background-color: #151515;
    outline: none;
    color: grey;
    cursor: pointer;
    text-align: center;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    &:hover{
        border: 2px solid white;
        background-color: #151515;
        color: #fafafaa1;
    }
    @media (max-width: 480px){
        padding: 10px 10px;
    }
`