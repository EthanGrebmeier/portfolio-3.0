import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin: 20px 0px 20px 0px;
`

const SectionTitle = styled.h2`
    font-weight: 300;
    font-size: 48px;
    color: ${props => props.color};
    @media screen and (max-width: 720px){
        font-size: 32px;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: start;
    width: 100%;
`

const ContentSection = ({children, ...rest}) => {
    return (
       
        <Wrapper id={rest.id}>
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