import styled from 'styled-components'
import { useState } from 'react'
import {UilSun, UilMoon} from '@iconscout/react-unicons'
import { HashLink as Link } from 'react-router-hash-link'

const Header = styled.nav`
  z-index: 99;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: var(--background);
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5));
  @media screen and (min-width: 721px){
    width: 100%;
    padding: 10px 20px 10px 20px;
    position: sticky;
    top: 15px;
    border-radius: 12px;
  }
  a {
    color: var(--primaryText);
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    transition: transform .2s ease;
    :hover{
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 720px){ 
    margin-top: 0px;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    align-items: start;
    padding: 30vh 0 30vh 10%;
    box-sizing: border-box;
    top: 0;
    display: ${props => props.isMobileOpen ? 'flex' : 'none'};
  }
`

const Dropdown = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  background: var(--background);  
  position: absolute;
  width: 350px;
  border-radius: 0 0 12px 12px;
  box-sizing: border-box;
  padding: 10px;
  a{
    font-weight: 300;
    font-size: 24px;
    margin-top: 5px;
  }
`

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

const Nav = ({projects, experience, isMobileOpen, setIsMobileOpen, isLightMode, toggleLightMode}) => {
  const [projectsHover, setProjectsHover] = useState(false)
  const [experienceHover, setExperienceHover] = useState(false)

  return(
    <Header isMobileOpen={isMobileOpen}>
        <Link to='/' onClick={() => setIsMobileOpen(!isMobileOpen)}> Home </Link>
        <Link to='/#projects' onClick={() => setIsMobileOpen(!isMobileOpen)} onMouseEnter={() => setProjectsHover(true)} onMouseLeave={() => setProjectsHover(false)}> 
          Projects
          <Dropdown active={projectsHover}>
            {projects && projectsHover && projects.map( project => {
              return <Link to={project.href}> {project.title} </Link>
            })}
          </Dropdown>  
        </Link>
        <Link to='/#experience' onClick={() => setIsMobileOpen(!isMobileOpen)} onMouseEnter={() => setExperienceHover(true)} onMouseLeave={() => setExperienceHover(false)}> 
          Experience  
          <Dropdown active={experienceHover}>
            {experience && experienceHover && experience.map( job => {
              return <Link to={job.href}> {job.title} </Link>
            })}
          </Dropdown>  
        </Link>
        <Link to='/#about' onClick={() => setIsMobileOpen(!isMobileOpen)}> About  </Link>
        <Link to='/#contact' onClick={() => setIsMobileOpen(!isMobileOpen)}> Contact Me  </Link>
        <Button onClick={toggleLightMode}>
            {isLightMode ? <UilSun color='var(--primaryText)' /> : <UilMoon color='var(--primaryText)'/>}
        </Button>
    </Header>
  )
}

export default Nav