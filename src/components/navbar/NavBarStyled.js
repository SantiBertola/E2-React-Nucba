import { Link } from "react-router-dom";
import styled from "styled-components";



export const NavBarContainerStyled = styled.div`
    height: 100px;
    width: 100%;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
` 

export const LinksContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 1rem 1.5rem;
  font-size: 18px;
  padding: 1rem 1.5rem;
    
    :hover {
    color: grey;
  }

`;

export const ToDoLinkStyled = styled(Link)`
  color: crimson;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 8px 16px;
  transition: color 0.2s ease-in-out;

  &.to-do-link-active {
    color: rgb(255, 80, 20);

    ::after {
      content: "*";
      margin-left: 4px;
    }
  }
`;
