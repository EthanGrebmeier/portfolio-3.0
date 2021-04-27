import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.form`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--secondary);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 20px;
`
const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
    
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
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
    margin-top: 8px;
`

const Body = styled.textarea`
    border-radius: 12px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    font-family: "Montserrat";
    resize: none;
    margin-top: 8px;
`

const Button = styled.button`
    width: 150px;
    height: 40px;
    background: transparent;
    border: 2px solid white;
    border-radius: 12px;
    color: white;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
    :hover{
        border: 4px solid white;
    }
    transition: border .1s linear;
`

const Status = styled.p`
    display:flex;
    align-items: center;
    height: 40px;
    width: 300px; 
    color: white;
    font-size: 24px;
`

const Contact = () => {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputBody, setInputBody] = useState('')

    const [status, setStatus] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (!inputBody || !inputEmail || !inputName){
            return setStatus('Please fill in each field')
        }
        setStatus('Sending...')
        axios.post('https://eg-portfolio-server.herokuapp.com/sendMail', {
            name: inputName,
            email: inputEmail,
            body: inputBody
        }).then(res => {
            setStatus('Email Sent!')
        }).catch(err => setStatus('Something went wrong'))
    }

    return (
        <Wrapper onSubmit={onFormSubmit}>
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
            <Status>
                {status}
            </Status>
            <Button>
                Send
            </Button>
        </Wrapper>
    )
}

export default Contact