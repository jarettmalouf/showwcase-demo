import React from "react";
import styled from "@emotion/styled";

// export const Button = styled.div`
//   padding: 1em;
//   font-size: 24px;
//   background-color: var(--red);
//   border-radius: 8px;
//   text-align: center;
//   color: white;
//   cursor: pointer;
//   transition: 0.2s ease;
//   font-weight: bold;
//   text-transform: uppercase;
//   &:hover {
//     filter: brightness(0.5);
//   }
// `;

export const Disableable = styled.div<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
`;

export function Button({
  children,
  ...props
}: {
  children: any;
  [name: string]: any;
}) {
  return (
    <div style={{ opacity: 0.99 }}>
      <AbstractButton {...props}>{children}</AbstractButton>
    </div>
  );
}

export const AbstractButton = styled.div`
  padding: 16px;
  font-family: var(--header-font);
  font-size: 20px;
  background-color: var(--red);
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: bolder;
  text-transform: uppercase;
  position: relative;
  margin-right: 8px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: -8px;
    bottom: -7px;
    z-index: -1;
    border-radius: 12px 16px 12px 16px;
    background: var(--red);
    filter: brightness(0.6);
  }
`;

export const BlueButton = styled(Button)`
  background: var(--blue);
  &::before {
    background: var(--blue);
  }
`;

export const ColoredButton = styled(Button)<{ color: string }>`
  background: ${({ color }) => color};
  &::before {
    background: ${({ color }) => color};
  }
`;
