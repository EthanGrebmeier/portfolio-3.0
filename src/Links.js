import styled from 'styled-components'
import { UilGithub, UilLinkedin, UilFileAlt } from '@iconscout/react-unicons'
import useWindowDimensions from './useWindowDimensions'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    a{
        margin-right: 80px;
        @media screen and (max-width: 720px){
            margin-right: 40px;
        }
    }
`

const Item = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${props => props.color};
    font-weight: 500;
    svg{
        margin-bottom: 10px;
    }
    @media screen and (min-width: 720px){
        font-size: 24px;
    }
    :hover{
        transform: translateY(-5px);
    }
    transition: all .2s ease;
`

const Links = () => {
    const windowDimensions = useWindowDimensions()

    return (
        <Wrapper>
            <Item color='var(--primaryText)' target='_blank' href='https://www.github.com/EthanGrebmeier'>
                <UilGithub size={windowDimensions.width > 720 ? '80' : '60' } color='var(--primaryText)' />
                Github
            </Item>
            <Item color='var(--primaryText)' target='_blank' href='https://www.linkedin.com/in/ethan-g-b23439116/'>
                <UilLinkedin size={windowDimensions.width > 720 ? '80' : '60' } color='var(--primaryText)'/>
                LinkedIn
            </Item>
            <Item color='var(--primaryText)' target='_blank' href='https://drive.google.com/file/d/1v3kY2pRC10Yh8KwsDcBhj5szkGEiI2BV/view?usp=sharing'>
                <UilFileAlt size={windowDimensions.width > 720 ? '80' : '60' } color='var(--primaryText)'/>
                Resume
            </Item>
        </Wrapper>
    )
}

export default Links