import { styled } from "styled-components";

export const Style = styled.div`
    position: sticky;
    top: 61.7812px;
    left: 0px;
    right: 0px;
    display: flex;
    align-content: center;
    width: 100%;
    height: max-content;
    background-color: ${props => props.theme.bgColor};
    overflow: hidden;
    padding-block:16px;
    isolation: isolate;

    .carousel{
        padding-left: 2rem;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        gap: 1rem;
    }
    .control{
        position: absolute;
        isolation: isolate;
        width: max-content;
        aspect-ratio: 1;
        top: 50%;
        transform: translateY(-50%);


        
        &::after{
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 250%;
            height: 200%;
            background-color: ${props => props.theme.bgColor};
            z-index: -1;
            filter: blur(7px);

        }
        
    }
    
    .right{
        right: 0;
    }


`;