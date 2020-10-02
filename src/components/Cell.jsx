import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white};
  background-image: linear-gradient(
    to bottom right,
    white 50%,
    ${(props) => props.theme.colors.gray} 100%
  );
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 7px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  cursor: pointer;

  :hover {
    box-shadow: 3px 8px 7px 2px rgba(0, 0, 0, 0.2);
  }

  :active {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  }

  .grid-cell {
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;
export default function Cell({ children, onClick }) {
  return (
    <StyledCell onClick={onClick}>
      <div className="grid-cell">{children}</div>
    </StyledCell>
  );
}
