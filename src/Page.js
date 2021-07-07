import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Site } from './App'
import ContentSection from './ContentSection'
import {useEffect} from 'react'

const Wrapper =  styled.div`
    margin-top: 20px;
    background: ${props => props.color};
    width: 100%;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    flex-direction: column;

    p, a, h1:not(:first-child){
        margin-top: 10px
    }

    p, a{
        margin-left: 4px
    }

    p{
        font-size: 24px;
    }

    h1{
        font-weight: 500;
    }

    a{
        font-size: 24px;
        color: white;
    }

    @media screen and 
`

const Links = styled.div`
    display: flex;
    a:not(:last-child){
        margin-right: 12px;
    }
`

const Page = ({content}) => {
    const isJob = content.position
    let link

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    
    const renderLinks = () => {
        
        if (content.demo){
            link = <a href={content.demo} target='_blank' rel='noreferrer'> Demo </a>
        } else {
            link = <Link to={content.href + '/demo'} target='_blank' rel='noreferrer'> Demo </Link>
        } 

        return (
            <>
                {link}
                { content.github && <a href={content.github} target='_blank' rel='noreferrer'> Github </a>}
            </>
        )
    }

    console.log(content.learned)
    return(
        <>
            <ContentSection title={content.title} margin='40px 0 20px 0' >
                <Wrapper color={isJob ? 'var(--secondary)' :  'var(--primary)'}>
                    {content.position && (
                    <>
                    <h1>
                        Position: 
                    </h1>
                    <p>
                        {content.position}
                    </p>
                    <p>
                        {content.length}
                    </p>
                    </>
                    )}
                    <h1>
                        About:
                    </h1>
                    <p>
                        {content.fullContent || content.content}
                    </p>
                    <h1>
                        Tech Stack:
                    </h1>
                    <p>
                        {content.subtext}
                    </p>
                    <Links>
                        {renderLinks()}
                    </Links>

                </Wrapper>
            </ContentSection>
            {
            content.article && <content.article/>
            }
        </> 
    )
}

export default Page