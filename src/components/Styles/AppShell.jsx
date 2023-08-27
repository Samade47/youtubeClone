import { styled } from "styled-components";

const AppShell = styled.div`
    position: relative;
    min-width: 550px;
    height: 90dvh;
    margin-top: 4.1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${props => props.theme.spacerLg};
`;

export { AppShell };