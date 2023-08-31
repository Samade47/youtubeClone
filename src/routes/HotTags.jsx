import { styled } from "styled-components";

const BasicTags = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    padding: 6px 12px;
    background-color: ${props => props.theme.tagBackground};
    color: ${props => props.theme.textColor};
    border-radius: 25px;
    cursor: pointer;

    &.active{
        background-color: ${props => props.theme.textColor};
        color:${props => props.theme.bgColor}
    }

   

`

export { BasicTags }