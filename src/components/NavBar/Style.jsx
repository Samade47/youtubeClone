import { styled } from "styled-components";

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem max(1rem,4%);
    color:${props => props.theme.textColor};
    gap:1rem;
    & .search{
        flex: 1;
        display: flex;
        justify-content: center;
        /* background: #fff; */
    }
    & .searchBar{
        flex:1;
        max-width: 60%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    & input{
        /* flex: 1; */
        width: 80%;
        display: inline-block;
    }
    & label{
    }
    & .searchBtn{
    }
        

`;

export default NavStyle