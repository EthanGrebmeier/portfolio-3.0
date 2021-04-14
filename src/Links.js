import styled from 'styled-components'
import { UilGithub, UilLinkedin } from '@iconscout/react-unicons'
import useWindowDimensions from './useWindowDimensions'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 80px;
    
`

const Item = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 10px;
    color: ${props => props.color};
    font-weight: 600;
    @media screen and (min-width: 720px){
        font-size: 24px;
    }
`

const Links = () => {
    const windowDimensions = useWindowDimensions()

    return (
        <Wrapper>
            <Item color='var(--primaryOne)' target='_blank' href='https://www.github.com/EthanGrebmeier'>
                <UilGithub size={windowDimensions.width > 720 ? '80' : '60' } color='var(--primaryOne)' />
                Github
            </Item>
            <Item color='var(--primaryTwo)' target='_blank' href='https://www.linkedin.com/in/ethan-g-b23439116/'>
                <UilLinkedin size={windowDimensions.width > 720 ? '80' : '60' } color='white' color='var(--primaryTwo)'/>
                LinkedIn
            </Item>
        </Wrapper>
    )
}

export default Links