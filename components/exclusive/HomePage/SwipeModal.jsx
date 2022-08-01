import styled from "styled-components";
import { useState } from "react";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SwipeModal() {
  const [isSwipeModalOpen, setIsSwipeModalOpen] = useState(true);

  function handleCloseModal() {
    setIsSwipeModalOpen(false);
  }

  return (
    <>
      {isSwipeModalOpen && (
        <ModalBackground onClick={handleCloseModal}></ModalBackground>
      )}
    </>
  );
}

export default SwipeModal;
