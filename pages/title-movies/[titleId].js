import Header from "../../components/exclusive/Header/Header";
import TitlePage from "../../components/exclusive/TitlePage/TitlePageMaster";
import styled from "styled-components";
import {
  HeaderWrapper,
  PageWrapper,
} from "../../components/universal/Containers.styles";

import { useRouter } from "next/router";
import Link from "next/link";

function Title() {
  const router = useRouter();
  console.log(router.query.titleId);

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