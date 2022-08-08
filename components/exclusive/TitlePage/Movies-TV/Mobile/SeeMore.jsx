import styled from "styled-components";

const SeeMoreStyle = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
`;

function SeeMore({ toggleFullSynopsis }) {
  return <SeeMoreStyle onClick={toggleFullSynopsis}>see more</SeeMoreStyle>;
}

export default SeeMore;
