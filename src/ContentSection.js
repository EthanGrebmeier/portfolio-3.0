import styled from 'styled-components'
import ContentCard from './ContentCard'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: ${props => props.margin || '20px 0px 20px 0px'};
`

const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    color: var(--primaryText);
    @media screen and (max-width: 720px){
        font-size: 24px;
        max-width: 60%;
        margin-left: 5px;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    width: 100%;
    a {
        margin-top: 20px;
    }
`

const ContentSection = ({children, ...rest}) => {
    return (
       
        <Wrapper id={rest.id} margin={rest.margin}>
            <SectionTitle color={rest.color || 'black'}>
                {rest.title}
            </SectionTitle>
            <Cards>
                {children}
            </Cards>  
        </Wrapper>
       
    )
}

export default ContentSection