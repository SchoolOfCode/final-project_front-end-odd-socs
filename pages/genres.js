import GenresPage from "../components/exclusive/GenresPage/GenresPage";
import Header from "../components/exclusive/Header/Header";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Genres() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <GenresPage />
      </PageWrapper>
    </>
  );
}

export default Genres;
