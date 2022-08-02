import styled from "styled-components";
import SwipeIcon from '@mui/icons-material/Swipe';
import { useEffect, useState } from "react";

const ModalBackgroundMobile = styled.div`
  width: 100vw;
  height: 100%;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid orange; */
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
`

const ModalText = styled.h2`
font-size: 2.5rem;
font-weight: 300;
color: var(--secondary);
`

const modalStyle = {
  fontSize: "7rem",
  color: "var(--secondary)",
  zIndex: "1999"
  
}


function SwipeModal({setIsFirstLoad, setCount, count}) {
  const [isSwipeModalOpen, setIsSwipeModalOpen] = useState(true);

  function handleCloseModal() {
    setIsSwipeModalOpen(false);
    setIsFirstLoad(false);
    setCount (count + 1);
  }

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
          <SwipeIcon style = {modalStyle}/>
          <ModalText>Swipe to Browse </ModalText>
        </ModalBackgroundMobile>)}
      {isSwipeModalOpen && width >= 500 && ( 
        (<ModalBackgroundDesktop onClick={handleCloseModal}>
          <SwipeIcon style = {modalStyle}/>
          <ModalText>Swipe to Browse </ModalText>
        </ModalBackgroundDesktop>)
      )};
    </>
  );
}

export default SwipeModal;
