import styled, { keyframes } from "styled-components";
import { UilReact, UilJavaScript} from '@iconscout/react-unicons'
import useWindowDimensions from './useWindowDimensions'

const Wrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    height: 350px;
    @media screen and (max-width: 720px){
        margin-top: 40px;
        height: 250px;
    }
`

const Nametag = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 5px;
    color: var(--primaryText);
    h1 {
        font-size: 54px;
        font-weight: 500;
        line-height: 60px;
        width: 220px
    }

    h3 {
        font-size: 32px;
        font-weight: 400;
    }

    @media screen and (max-width: 720px){
        width: 100%;
        height: 150px;
        h1 {
            line-height: 50px;
            font-size: 54px;
        }

        h3 {
            font-size: 24px;
        }
    }
`

const Skills = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 720px){
        width: 100%;
        display: none;
    }
`

const Float = keyframes`
    from{transform: translateY(0);}
    to{transform: translateY(10px);}
`

const Skill = styled.div`
    width: 130px;
    height: 125px;
    border-radius: 12px;
    background: var(--secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    animation-delay: ${props => props.delay};
    animation-name: ${Float};
    animation-duration: ${props => props.duration};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    h1{
        font-size: 72px;
    }
    h2{
        font-weight: 500;
    }
    @media screen and (max-width: 720px){
        width: 100px;
        height: 85px;
        h1{
            font-size: 42px;
        }
        h2{
            font-size: 16px;
        }
    }
`


const Landing = () => {
    const windowDimensions = useWindowDimensions()
    const getRandomStart = () => {
        return Math.floor((Math.random() * 5) + 1)
    }
    const getRandomDuration = () => {
        return Math.random() * (4 - 2) + 2;
    }
    return (
    <Wrapper>
        <Nametag>
            <h1> Ethan Grebmeier</h1>
            <h3> Web Developer</h3>
        </Nametag>

        <Skills>
            <Skill delay={() => '-' + getRandomStart() + 's'} duration={() => getRandomDuration() + 's'}>
                <UilReact size={windowDimensions.width > 720 ? 90 : 50} color='white'/>
                <h2> React </h2>
            </Skill>
            <Skill delay={() => '-' + getRandomStart() + 's'} duration={() => getRandomDuration() + 's'} >
                <UilJavaScript size={windowDimensions.width > 720 ? 90 : 50} color='white'/>
                <h2> Node.js </h2>
            </Skill>
            <Skill delay={() => '-' + getRandomStart() + 's'} duration={() => getRandomDuration() + 's'}>
                <h1> 5 </h1>
                <h2> HTML5 </h2>
            </Skill>
        </Skills>

    </Wrapper>
    )
}


export default Landing
