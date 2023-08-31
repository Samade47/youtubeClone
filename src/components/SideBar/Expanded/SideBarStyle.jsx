import { styled } from "styled-components";



const SideBarStyle = styled.div`
    position: fixed;
    left:${props => props.expanded ? 0 : -250}px;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.bgColor};
    gap:${props => props.theme.spacerSm}px;
    overflow-y: auto;
    padding: ${props => props.theme.spacerSm}px;
    transition: left 0.3s ease-out;

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: transparent;
    
    &:hover{
        scrollbar-color: #636363 transparent;
    } 
    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
    width: 7px;
    }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 10px;
    border: 0px none #ffffff;
  }
`;

export { SideBarStyle };