import styled from 'styled-components'
import Paragraph from './Paragraph'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.5));
    img{
        width: 100%;
        border-radius: 12px;
    }
    ${Paragraph}{
        position: absolute;
        color: black;
        bottom: 15px;
        left: 15px;
        margin: 0;
        font-size: 16px;
    }
`

const Image = ({src, alt, subtext}) => {
    return(
        <Wrapper>
            <img src={src} alt={alt}/>
            <Paragraph>
                {subtext}
            </Paragraph>
        </Wrapper>
    )

}

export default Image