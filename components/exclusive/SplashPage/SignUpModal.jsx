import styled from "styled-components"
import { SignUpEmail } from "./firebase/SignUpEmail"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    `
    const Background = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
    top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `

const LogInModal = () => {
    return (
        <PageContainer>
            <Background>
                <SignUpEmail/>
            </Background>
        </PageContainer>
    )
}
export default LogInModal
