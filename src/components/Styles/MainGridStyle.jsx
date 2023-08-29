import { styled } from "styled-components";

export const MainGridStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: ${props => props.expanded ? `calc(100% - 249px)` : '100%'};
    height: max-content;
    transform-origin: right top;
    margin-left: ${props => props.expanded ? "249px" : "0px"};
    padding-inline: min(3%,2rem);
    padding-block-end:2rem;
    background-color: #ffc67b8a;
    transition: 
        margin-left 0.3s ease-out,
        width .3s ease-out;

`;
