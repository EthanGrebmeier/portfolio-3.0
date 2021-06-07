import styled from 'styled-components'
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import { HashLink as Link } from 'react-router-hash-link'

const Wrapper = styled(Link)`
    width: 415px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 12px;
    color: white;
    background: ${props => props.color ||'var(--secondary)'};
    cursor: pointer;
    position: relative;
    text-decoration: none;
    @media screen and (max-width: 1250px){
        width: 48%;
        h1{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 720px){
        width: 100%;
        height: 220px;
    }
    :hover{
        transform: translateY(-5px)
    }

    transition: transform .2s ease;
`

const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.p`
    height: 59px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: ${ props => props.isJob ? '16px' : '24px'};
    @media screen and (max-width: 720px){
        height: 60px;
    }
`

const Subtext = styled.p`
    height: 40px;
    width: 80%;
    font-size: 18px;
    font-style: italic;
    @media screen and (max-width: 800px){
        font-size: 12px;
        width: 65%;
    }
    @media screen and (max-width: 720px){
        font-size: 18px;
        width: 65%;
        height: 34px;
    }
    @media screen and (max-width: 500px){
        font-size: 13px;
    }

`


const ContentCard = (props) => {
    const isJob = props.position 

    return(
        <Wrapper color={props.color} to={props.href || '#'}>
            <h1>
                {props.title}
            </h1>
            <JobDetails>
                <p> {props.position} </p>
                <p> {props.length} </p>
            </JobDetails>
            <Content isJob={isJob}>
                {props.content}
            </Content>
            <Subtext>
                {props.subtext}
            </Subtext>
            
        </Wrapper>
    )
}

export default ContentCard