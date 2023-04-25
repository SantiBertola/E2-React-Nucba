import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border: 2px solid crimson;
    border-radius: 40px;
    background-color: #101010;
    backdrop-filter: blur(5px);
`
export const CardTitle = styled.h2`
    font-size: 34px;
    font-weight: 600;
    color: rgb;
    text-align: center;
    color: crimson;
    width: 80%;
`

export const CardImg = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px;
`
export const CardTexts = styled.p`
    font-size: 18px;
    color: crimson;
    font-weight: 400;
` 