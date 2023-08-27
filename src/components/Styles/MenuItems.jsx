import { styled } from "styled-components";
import { Link } from "react-router-dom"

const MenuItem = styled(Link)`
    padding-block: ${props => props.theme.spacerXs}px ;
    padding-inline-start:${props => props.theme.spacerXs}px ;
    padding-inline-end: ${props => props.theme.spacerXl}px;
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${props => props.theme.spacerSm}px;
    font-size: 1rem;
    font-family: sans-serif;
    color: ${props => props.theme.textColor};
    transform-origin: left top;
    transition: background-color .3s ease-out;
    border-radius: ${props => props.theme.spacerXs}px;

    &:hover{
        background-color: ${props => props.theme.borderColor};
    }

    & > svg{
        font-size: 1.3rem;
    }
`

const MenuSection = styled.div`
    display: flex;
    flex-direction: column;

    & .sectionTitle{
        font-size: .9rem;
        font-family: sans-serif;
        font-weight: 500;
        margin-bottom: ${props => props.theme.spacerXs}px;
    }

    & p{
        font-family: sans-serif;
        font-size: .8rem;
        color: #ffffffd0;
        max-width: 30ch;
        line-height: 1.9;
    }
`;

const MenuDevider = styled.hr`
    height: .5px;
    border-color: ${props => props.theme.borderColor};
    border-radius:50%;
`

export { MenuItem, MenuSection, MenuDevider }