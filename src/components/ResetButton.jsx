import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  // Outline will need to be set in production for a11y
  outline: none;
  border: none;
  box-shadow: 10px 10px 25px 8px rgb(17, 25, 104, 0.2);
  border-radius: 50rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  :active {
    transform: translateY(10px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  svg:hover {
    transform: rotate(360deg);

    g {
      fill: ${(props) => props.theme.colors.pink};
    }
  }
`;

export default function ResetButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="52"
        height="52"
        viewBox="0 0 172 172"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#5285e5">
            <path d="M86,6.88c-43.6552,0 -79.12,35.4648 -79.12,79.12c0,43.6552 35.4648,79.12 79.12,79.12c43.6552,0 79.12,-35.4648 79.12,-79.12c0.01754,-1.24059 -0.63425,-2.39452 -1.7058,-3.01993c-1.07155,-0.62541 -2.39684,-0.62541 -3.46839,0c-1.07155,0.62541 -1.72335,1.77935 -1.7058,3.01993c0,39.9368 -32.3032,72.24 -72.24,72.24c-39.9368,0 -72.24,-32.3032 -72.24,-72.24c0,-39.9368 32.3032,-72.24 72.24,-72.24c23.02284,0 43.46506,10.76965 56.69281,27.52h-22.29281c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h29.06531h5.33469v-34.4c0.01273,-0.92983 -0.35149,-1.82522 -1.00967,-2.48214c-0.65819,-0.65692 -1.55427,-1.01942 -2.48408,-1.00489c-1.89722,0.02966 -3.41223,1.58976 -3.38625,3.48703v23.04531c-14.49896,-18.22214 -36.84998,-29.92531 -61.92,-29.92531z"></path>
          </g>
        </g>
      </svg>
    </StyledButton>
  );
}
