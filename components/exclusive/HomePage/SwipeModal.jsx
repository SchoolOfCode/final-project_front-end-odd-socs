import styled from "styled-components";
import SwipeIcon from "@mui/icons-material/Swipe";
import { useEffect, useState } from "react";

const ModalBackgroundMobile = styled.div`
  width: 100vw;
  height: 100%;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1998;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 50rem;
`;

const ModalBackgroundDesktop = styled(ModalBackgroundMobile)`
  justify-content: flex-start;
  padding-top: 15rem;
  overflow: hidden;
`;

const ModalText = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--secondary);
`;

const modalStyle = {
  fontSize: "7rem",
  color: "var(--secondary)",
  zIndex: "1999",
};

function SwipeModal() {
  const [isSwipeModalOpen, setIsSwipeModalOpen] = useState(true);

  function handleCloseModal() {
    setIsSwipeModalOpen(false);
  }

  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setIsSwipeModalOpen(true);
      localStorage.setItem("pop_status", 1);
    }
  }, []);

  // if (!isSwipeModalOpen) {
  //   return null;
  // }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      {isSwipeModalOpen && width < 500 && (
        <ModalBackgroundMobile onClick={handleCloseModal}>
          <SwipeIcon style={modalStyle} />
          <ModalText>Swipe to Browse </ModalText>
        </ModalBackgroundMobile>
      )}
      {isSwipeModalOpen && width >= 500 && (
        <ModalBackgroundDesktop onClick={handleCloseModal}>
          <SwipeIcon style={modalStyle} />
          <ModalText>Swipe or Click & Drag to Browse </ModalText>
        </ModalBackgroundDesktop>
      )}
    </>
  );
}

export default SwipeModal;
