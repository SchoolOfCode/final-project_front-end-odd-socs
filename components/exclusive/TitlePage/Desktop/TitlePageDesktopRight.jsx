import styled from "styled-components";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TitlePageRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  width: 50%;
  gap: 1rem;
`;

const CommentSectionContainer = styled.div`
  max-height: 20rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentHeader = styled.div`
  display: flex;
`;

const CommentTitle = styled.h5`
  color: white;
  font-weight: 300;
  width: 100%;
  font-size: 1.5rem;
`;

const Comment = styled.div`
  display: flex;
  color: white;
  font-weight: 300;
  width: 100%;
  gap: 0.5rem;
`;

export const CommentDummyData = {
  text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

console.log(Object.values(CommentDummyData).length);

function TitlePageDesktopRight() {
  return (
    <TitlePageRightContainer>
      <CommentHeader>
        <CommentTitle>{`Comments (${Object.values(CommentDummyData).length})`}</CommentTitle>
      </CommentHeader>
      <CommentSectionContainer>
        {Object.values(CommentDummyData).map((comment) => {
          return (
            <Comment>
              <AccountCircleIcon />
              <p>{comment}</p>
            </Comment>
          );
        })}
      </CommentSectionContainer>
    </TitlePageRightContainer>
  );
}

export default TitlePageDesktopRight;
