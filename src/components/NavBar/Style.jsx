import { styled } from "styled-components";

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem max(1rem,4%);
    color:${props => props.theme.textColor};

`;

export default NavStyle