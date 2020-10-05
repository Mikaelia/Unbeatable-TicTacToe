import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white};
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.white} 50%,
    ${(props) => props.theme.colors.gray} 100%
  );
  box-shadow: 3px 3px 7px 2px rgba(17, 25, 104, 0.15);
  transition: all 0.4s ease;
  cursor: pointer;

  :hover {
    box-shadow: 3px 8px 7px 2px rgba(17, 25, 104, 0.2);
  }

  :active {
    box-shadow: 0px 0px 0px 0px rgba(17, 25, 104, 0.05);
  }

  > div {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
  }
`;
const Cell = ({ children, onClick }) => (
  <StyledCell onClick={onClick}>
    <div data-testid="board-cell">{children}</div>
  </StyledCell>
);

export default Cell;
