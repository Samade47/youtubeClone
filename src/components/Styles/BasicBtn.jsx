import { styled } from "styled-components";

const BasicBtn = styled.button`
display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        padding: 0.4rem 0.5rem;
        border-radius: 100px;
        cursor: pointer;
        border: 1px solid ${props => props.theme.borderColor};
        transition: .3s ease-out;
    &:hover{
        background-color: #ff0000bb;
        border-color: transparent;
    }
`
