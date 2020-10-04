import React from "react";
import styled from "styled-components";

const StyledX = styled.div`
  position: relative;
  height: 3.5rem;
  width: 3.5rem;

  :before {
    content: "";
    position: absolute;
    left: 0%;
    top: 50%;
    height: 3px;
    width: 100%;
    background: blue;
    background-image: linear-gradient(to left, #6a60f0, #72d5f5);
    border-radius: 5rem;
    transform: rotate(45deg);
  }

  :after {
    content: "";
    position: absolute;
    left: 0%;
    top: 50%;
    height: 3px;
    width: 100%;
    background: blue;
    background-image: linear-gradient(to left, #6a60f0, #72d5f5);
    border-radius: 5rem;
    transform: rotate(135deg);
  }
`;
export default function X() {
  return <StyledX></StyledX>;
}
