import Header from "../../../../components/exclusive/Header/Header";
import TitlePage from "../../../../components/exclusive/TitlePage/Movies-TV/TitlePageMaster";
import styled from "styled-components";
import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

import { tvlist } from "../../../../public/tv-data/tv-data";

function Title({ tvData }) {
  const router = useRouter();
  const titleId = router.query.movieId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TitlePage tvData={tvData} />
      </PageWrapper>
    </>
  );
}

export async function getStaticPaths() {
  const topTVIDs = tvlist.top10.map((tv) => tv.id.toString());
  const airingTodayIDs = tvlist.airingToday.map((tv) => tv.id.toString());
  const actionIDs = tvlist.action.map((tv) => tv.id).toString();
  const dramaIDs = tvlist.drama.map((tv) => tv.id.toString());
  const scifiIDs = tvlist.scifi.map((tv) => tv.id.toString());
  const animeIDs = tvlist.anime.map((tv) => tv.id.toString());
  const crimeIDs = tvlist.crime.map((tv) => tv.id).toString();
  const randomIDs = tvlist.random.map((tv) => tv.id.toString());

  let IDs = [
    ...topTVIDs,
    ...airingTodayIDs,
    ...actionIDs,
    ...dramaIDs,
    ...scifiIDs,
    ...animeIDs,
    ...crimeIDs,
    ...randomIDs,
  ];

  return {
    fallback: true,
    paths: IDs.map((ID) => ({ params: { tvId: ID } })),
  };
}

export async function getStaticProps(context) {
  const tvId = context.params.tvId;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=5b12a167b6f95af9455340da9de5a3ad`
  );
  const selectedTV = await res.json();

  return {
    props: {
      tvData: selectedTV,
    },
  };
}

export default Title;
