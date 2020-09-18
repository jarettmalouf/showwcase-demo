import React, { FunctionComponent } from "react";

import styled from "@emotion/styled";

interface ModalType {
  style?: { [name: string]: string };
}

const Modal: FunctionComponent<ModalType & { onClick?: Function }> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <Container
      onClick={() => {
        if (!onClick) return;
        onClick();
      }}
      {...props}
    >
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  height: 100%;
  width: 100%;
  z-index: 3;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

const Content = styled.div`
  cursor: default;
  animation: fadeIn 0.5s ease;
  box-sizing: border-box;

  @media (max-width: 600px) {
    animation: none;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 36px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  font-size: 24px;
  color: white;
  border: 8px solid white;
  overflow: hidden;
  position: relative;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  @media (max-height: 800px) {
    zoom: 0.7;
  }
`;

export const ModalTitle = styled.h1`
  margin: 0;
  margin-bottom: 12px;
`;
