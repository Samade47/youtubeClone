import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ChannelProfile = styled(Link)`
    display: block;
    border-radius: 100px;
    text-decoration: none;
    width: ${(props) => props.w || 45}px;
    aspect-ratio: 1;
    background-image: url(${props => props.cover || "/videoBanner/bann-01.jpg"});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export { ChannelProfile };