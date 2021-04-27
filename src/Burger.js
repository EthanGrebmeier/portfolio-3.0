import styled from 'styled-components'
import { UilBars, UilTimes } from '@iconscout/react-unicons'

const Wrapper = styled.button`
    background: none;
    border: none;
    position: fixed;
    top: 35px;
    right: 25px;
    z-index: 3000;
    @media screen and (min-width: 720px){
        display: none;
    }
`

const Burger = ({isMobileOpen, setIsMobileOpen}) => {
    return(
        <Wrapper onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <UilTimes color='var(--primaryText)' size={30} /> : <UilBars color='var(--primaryText)' size={30} />}
        </Wrapper>
    )
}

export default Burger