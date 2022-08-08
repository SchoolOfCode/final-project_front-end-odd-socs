import styled from "styled-components"
import LogInEmail from "./firebase/LogIn/LogInEmail"
import LogInGoogle from "./firebase/LogIn/LogInGoogle"
import LogInGithub from "./firebase/LogIn/LogInGithub"
import { useState } from "react"

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

    const LogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    `

const LogInModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)

    function closeModalHandler(){
        setIsModalOpen(false);
        console.log(isModalOpen)
    }

    function handleExitClick(){
        closeModalHandler()
    }

    return (
        <PageContainer>
            <Background>
                <LogInContainer>   
                    <button onClick={handleExitClick}>X</button>
                    <LogInEmail />
                    <LogInGoogle />
                    <LogInGithub />
                </LogInContainer>
            </Background> 
        </PageContainer>
    )
}
export default LogInModal
