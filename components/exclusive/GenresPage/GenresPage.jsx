import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";

import GenresHorror from "./GenresHorror";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function GenresPage() {
  return (
    <PageContainer>
      <PageTitle>Genres - Horror</PageTitle>
      <GenresHorror />
    </PageContainer>
  );
}

export default GenresPage;
