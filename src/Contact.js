import { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--primaryTwo);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 20px;
`
const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
    font-size: 24px;
    width: 100%;
    ${Row} & {
        width: 48%;
    }
`

const Input = styled.input`
    border-radius: 12px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
`

const Body = styled.textarea`
    border-radius: 12px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    font-family: "Montserrat"
`

const Contact = () => {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputBody, setInputBody] = useState('')

    return (
        <Wrapper>
            <Row>
                <Label>
                    Name
                    <Input onChange={e => setInputName(e.target.value)} />
                </Label> 
                <Label>
                    Email
                    <Input onChange={e => setInputEmail(e.target.value)}/>
                </Label> 
            </Row>
            <Label>
                Body
                <Body onChange={e => setInputBody(e.target.value)} rows='10'/>
            </Label>
        </Wrapper>
    )
}

export default Contact