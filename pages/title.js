import Header from "../components/exclusive/Header/Header";
import TitlePage from "../components/exclusive/TitlePage/TitlePageMaster";
import styled from "styled-components";
import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Title() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TitlePage />
      </PageWrapper>
    </>
  );
}

export default Title;
