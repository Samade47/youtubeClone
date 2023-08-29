import { styled } from "styled-components";

export const Style = styled.div`
    display: block;
    width: 100%;
    height: 2rem;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.spacerLg}px;

`;