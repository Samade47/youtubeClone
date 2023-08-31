import { styled } from "styled-components";

const BasicBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 0.4rem;
  border-radius: ${(props) =>
    props.btnRadius ? `${props.btnRadius}px` : "200px"};
  cursor: pointer;
  border: 1px solid ${(props) => props.border ? props.theme.borderColor : "transparent"};
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${(props) =>
    props.btnColor ? props.btnColor : props.theme.borderColor};
    border-color: transparent;
  }
`;
const BasicBtnAccent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 1rem;
  background: transparent;
  color: ${(props) => (props.color ? props.color : "#2b63efe1")};
  padding: 0.4rem 0.8rem;
  border-radius: ${(props) =>
    props.btnRadius ? `${props.btnRadius}px` : "200px"};
  cursor: pointer;
    border: 1px solid ${(props) => props.theme.borderColor};
  transition: 0.3s ease-out;
  
  &:hover {
    background-color: ${(props) => (props.bg ? props.bg : "#0536b24a")};
  }
`;


export { BasicBtn, BasicBtnAccent };
