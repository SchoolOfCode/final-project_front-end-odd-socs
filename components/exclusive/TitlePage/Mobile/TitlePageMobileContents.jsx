import styled from "styled-components";


const PageTitleContentContainer = styled.div`
background-color: var(--primary);
margin-bottom: 15vh;
position: relative;
z-index: 10;
border: 2px solid green;
`;

function TitlePageContents({movieInfo}) {
    return (<PageTitleContentContainer><h1>Hello</h1></PageTitleContentContainer>)
};

export default TitlePageContents