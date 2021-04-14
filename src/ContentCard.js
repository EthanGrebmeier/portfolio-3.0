import styled from 'styled-components'
import { UilArrowCircleRight } from '@iconscout/react-unicons'

const Wrapper = styled.div`
    width: 450px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 12px;
    color: white;
    background: ${props => props.color === 'primaryOne' ? 'var(--primaryOne)' : 'var(--primaryTwo)'};
    cursor: pointer;
    position: relative;
    @media screen and (max-width: 1250px){
        width: 48%;
        h1{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 720px){
        width: 100%;
    }
`

const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.p`
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: ${ props => props.isJob ? '16px' : '24px'};
`

const Subtext = styled.p`
    height: 40px;
    width: 75%;
    font-size: 18px;
    font-style: italic;
    @media screen and (max-width: 800px){
        font-size: 12px;
        width: 65%;
    }
    @media screen and (max-width: 720px){
        font-size: 18px;
        width: 65%;
    }
    @media screen and (max-width: 500px){
        font-size: 13px;
    }

`

const ViewMore = styled.a`
    position: absolute;
    height: 40px;
    display: flex;
    gap: 10px;
    bottom: 0;
    right: 0;
    display: flex;
    color: white;
    padding: 20px;
    font-size: 24px;
`

const ContentCard = (props) => {
    const isJob = props.position
    return(
        <Wrapper color={props.color}>
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
            <ViewMore href='#'> More <UilArrowCircleRight color='white' size='30' /> </ViewMore>
        </Wrapper>
    )
}

export default ContentCard