import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  border: 2px solid crimson;
  border-radius: 10px;
  margin-top: 30px;

  & h1 {
    color: crimson;
  }

  @media (max-width: 768px){
        max-width: 680px;
        gap: 40px;
    }
    @media (max-width: 480px){
        max-width: 400px;
        padding: 10px 15px;
        gap: 30px;
    }
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const InputStyled = styled.input`
  padding: 7px;
  border: 2px solid crimson;
  border-radius: 5px;
  background-color: #6666;
  color: white;
  width: 200px;
  height: 20px;
`;

export const ButtonContainerStyled = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4caf50;
  }
`;

export const ResetButtonContainerStyled = styled.button`
  padding: 10px;
  margin: 7.5px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff4040;
  }
`;


export const ListWrapperStyled = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;

`

export const ListStyled = styled.li`
      list-style : none;
      color: white;
      font-size: 20px;
      background-color: #6666;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid crimson;
      text-align: center;
      display: flex;
      justify-content: space-between;
      
`

