import styled from "styled-components";
import ProfileAccountIcon from "./ProfileAccountIcon";

const UserInitials = styled.h2`
  color: var(--font-primary-color);
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;
const YearJoined = styled.h3`
  color: var(--font-secondary-color);
  font-size: 1.4rem;
  font-weight: 400;
`;
const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 400px) {
    margin-top: 8rem;
  }
`;

export function Account() {
  return (
    <>
      <AccountContainer data-testid="AccountContainer-Test">
        <ProfileAccountIcon />
        <UserInitials data-testid="UserInitials-Test" >SP</UserInitials>

        <YearJoined data-testid="YearJoined-Test" >Member since 2022</YearJoined>
      </AccountContainer>
    </>
  );
}
