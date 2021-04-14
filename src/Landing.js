import styled from "styled-components";
import { UilReact, UilJavaScript} from '@iconscout/react-unicons'
import useWindowDimensions from './useWindowDimensions'
import { useState } from "react";


const Wrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    height: 350px;
    gap: 20px;
    @media screen and (max-width: 720px){
        height: 350px;
    }
`

const Nametag = styled.div`
    margin-top: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--primaryOne);
    h1 {
        font-size: 54px;
        font-weight: 500;
        line-height: 70px;
        width: 200px
    }

    h3 {
        font-size: 32px;
        font-weight: 400;
    }

    @media screen and (max-width: 720px){
        width: 100%;
        height: 160px;
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
    }
`

const Skill = styled.div`
    width: 130px;
    height: 125px;
    border-radius: 12px;
    background: var(--primaryTwo);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
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
    return (
    <Wrapper>
        <Nametag>
            <h1> Ethan Grebmeier</h1>
            <h3> Web Developer</h3>
        </Nametag>

        <Skills>
            <Skill>
                <UilReact size={windowDimensions.width > 720 ? 90 : 50} color='white'/>
                <h2> React </h2>
            </Skill>
            <Skill>
                <UilJavaScript size={windowDimensions.width > 720 ? 90 : 50} color='white'/>
                <h2> Node.js </h2>
            </Skill>
            <Skill>
                <h1> 5 </h1>
                <h2> HTML5 </h2>
            </Skill>
        </Skills>

    </Wrapper>
    )
}


export default Landing