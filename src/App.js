import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Redirect, useParams} from 'react-router-dom'
import Home from './Home'
import Page from './Page'
import Nav from './Nav'
import projects from './projects'
import experience from './experience'
import { useState } from 'react'
import { useEffect } from 'react'
import Burger from './Burger'
import Reader from './Demos/Reader/App'
import SayHello from './Demos/SayHello/App'
import Sorter from './Demos/Sorter/App'


export const Site = styled.div`
width: 100%;
min-height: 100vh;
max-width: 100vw;
--primaryText: ${ props => props.isLightMode  ? '#362F48' : 'white'};
--primary: #8BCCDA;
--secondary: #9F8BDA;
--background: ${ props => props.isLightMode  ? 'white' : '#362F48'};
--articleTextOne: ${ props => props.isLightMode  ? '#4D9078' : '#F2C14E'};
--articleTextTwo: ${ props => props.isLightMode  ? '#B4436C' : '#F78154'};
--aside: ${ props => props.isLightMode  ? '#f2f0e9' : '#7966a8'};
background: var(--background);  
display: flex;
justify-content: center;
transition: all .4s ease;
position: relative;
`

const Wrapper = styled.div`
    width: 98%;
    max-width: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :not(:last-child) {
      margin-top: 20px;
    }
    position: relative;
    font-family: 'Montserrat';
    @media screen and (max-width: 720px){
      width: 93%;
      max-width: 500px;
    }
  `


const App = () => {

  const [isLightMode, setIsLightMode] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const getMode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      return false
    }
    return true
  }

  useEffect(() => {
    setIsLightMode(getMode())
  }, [])

  const toggleLightMode = () => {
    if (isLightMode) {
      setIsLightMode(false)
    } else {
      setIsLightMode(true)
    } 
  }

  const Match = ({list}) => {
    let {id} = useParams()
    for (let i in list){
      if (list[i].id === id){
        return (<Page content={list[i]} />)
      }
    }
    return (
    <Home
      projects={projects}
      experience={experience}
    />)
  }

  const Demo = () => {
    let {id} = useParams()
    console.log(id)
    switch (id) {
      case 'reader':
        return <Reader/>
      case 'say-hello':
        return <SayHello/>
      case 'sorter': 
        return <Sorter/>
      default:
        return (
        <Home
          projects={projects}
          experience={experience}
        />)
    }
  }


  return(
    <Site isLightMode={isLightMode}>
      <Router>
        <Wrapper>

          <Nav  
            projects={projects}
            experience={experience}
            isLightMode={isLightMode}
            toggleLightMode={toggleLightMode}
            setIsMobileOpen={setIsMobileOpen}
            isMobileOpen={isMobileOpen}
          />
          <Burger
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
          
            <Switch>
              <Route exact path='/'>
                <Home
                  projects={projects}
                  experience={experience}
                />
              </Route>
              <Route path='/project/:id'>
                <Match list={projects}/>
              </Route>
              <Route path='/experience/:id'>
                <Match list={experience}/>
              </Route>
            </Switch> 
        </Wrapper>
        <Switch>
          <Route path='/project/:id/demo'>
            <>
              <Demo list={projects}/> 
            </>
          </Route>

        </Switch>

      </Router>
    </Site>
  )
}

export default App