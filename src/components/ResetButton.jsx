import React from "react";
import styled from "styled-components";
import { ReactComponent as ResetSVG } from "../assets/resetSvg.svg";

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
  background-color: ${(props) => props.theme.colors.gray};

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

const ResetButton = ({ onClick }) => (
  <StyledButton onClick={onClick} data-testid={"reset-button"}>
    <ResetSVG />
  </StyledButton>
);

export default ResetButton;
