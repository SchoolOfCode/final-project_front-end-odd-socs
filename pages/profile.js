import Header from "../components/exclusive/Header/Header";
import { ProfilePage } from "../components/exclusive/ProfilePage/ProfilePage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Profile() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        {/* <ProfilePage /> */}
      </PageWrapper>
    </>
  );
}

export default Profile;
