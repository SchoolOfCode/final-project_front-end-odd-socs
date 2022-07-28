import styled from "styled-components";

const SeeLessStyle = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
`;

function SeeLess({ toggleFullSynopsis }) {
  return <SeeLessStyle onClick={toggleFullSynopsis}>see less</SeeLessStyle>;
}

export default SeeLess;
