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

// const CommentHeader = styled.div`
//   display: flex;
// `;

// const CommentTitle = styled.h5`
//   color: white;
//   font-weight: 300;
//   width: 100%;
//   font-size: 1.5rem;
// `;

const Comment = styled.div`
  display: flex;
  color: white;
  font-weight: 400;
  width: 100%;
  gap: 0.5rem;
`;

// review drop down components
const ReviewHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const CommentTitle = styled.h5`
  color: white;
  font-size: 1.4rem;
  font-weight: 400;
`;

//review section

const AddReviewContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;
const AccountCircleIconContainer = styled.div`
  padding-right: 0.5rem;
`;
const ReviewTextAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b2b3a;
  border-radius: 10px;
  width: 100%;
`;
const ReviewTextField = styled.textarea`
  border: 1px solid #1b2b3a;
  background-color: #1b2b3a;
  font-family: inherit;
  font-size: 1rem;
  padding: 2px 10px;
  color: var(--font-secondary-color);
  border: none;
  outline: none;
  border-radius: 10px;

  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 1.2rem;
  line-height: 30px;
`;
const ReviewButton = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #1b2b3a;
  color: white;
  padding: 10px;
  font-weight: bold;
  color: var(--secondary);
`;
const CommentText = styled.p`
  font-size: 1rem;
  /* text-align: justify; */
`;

export const CommentDummyData = {
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text5:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text6:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text7:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

function TitlePageDesktopRight() {
  return (
    <TitlePageRightContainer>
      <ReviewHeaderContainer>
        <CommentTitle>
          {`Comments (${Object.values(CommentDummyData).length})`}
        </CommentTitle>
      </ReviewHeaderContainer>
      <AddReviewContainer>
        <AccountCircleIconContainer>
          <AccountCircleIcon />
        </AccountCircleIconContainer>
        <ReviewTextAndButtonContainer>
          <ReviewTextField placeholder="Leave a review..."></ReviewTextField>
          <ReviewButton>Post</ReviewButton>
        </ReviewTextAndButtonContainer>
      </AddReviewContainer>
      <CommentSectionContainer>
        {Object.values(CommentDummyData).map((comment, key) => {
          return (
            <Comment key={key}>
              <AccountCircleIcon />
              <CommentText>{comment}</CommentText>
            </Comment>
          );
        })}
      </CommentSectionContainer>
    </TitlePageRightContainer>
  );
}

export default TitlePageDesktopRight;
