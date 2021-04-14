import styled from 'styled-components'
import AboutMe from './AboutMe'
import Links from './Links'
import ContentCard from './ContentCard'
import ContentSection from './ContentSection'
import Landing from './Landing'
import Contact from './Contact'

const Page = styled.div`
  width: 98%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  background: white;  
  color: #38E4AE;
  font-family: 'Montserrat';
  --primaryOne: #8BCCDA;
  --primaryTwo: #9F8BDA;
  @media screen and (max-width: 720px){
    width: 96%;
    max-width: 500px;
  }

  #projects{
    scroll-padding: -200px;
  }

`

const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  position: sticky;
  top: 15px;
  background: rgba(255,255,255,.9);
  border-radius: 12px;
  z-index: 200;
  a {
    color: var(--primaryOne);
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
  }

  @media screen and (max-width: 720px){
    display: none;
  }
`

function App() {
  return (
    <Page>
      <Header>
        <a href='#projects'> Projects  </a>
        <a href='#experience'> Experience  </a>
        <a href='#about'> About  </a>
        <a href='#contact'> Contact Me  </a>
      </Header>

      <Landing/>
      
      <ContentSection title='Projects' color='#8BCCDA' id='projects'>
        <ContentCard 
          title='Traace.io' 
          content='A web-application for Covid-19 Links Tracing'
          subtext='React, Node, Express, PostgreSQL'
        />
        <ContentCard 
          title='Sorter' 
          content='A sorting algorithm visualizer'
          subtext='React'
        />
        <ContentCard 
          title='Say Hello' 
          content='A lightweight Twitter clone'
          subtext='React, Node, Express, MongoDB'
        />
        <ContentCard 
          title='Reader' 
          content='A speed reading assistant'
          subtext='React'
        />
      </ContentSection>

      <ContentSection title='Experience' color='#9F8BDA' id='experience'>
        <ContentCard 
          color='primaryOne'
          title='The Future is Good' 
          position='Web Developer'
          length='Jun ‘20 - Present'
          content='The Future is Good (The FIG) is an online marketplace, tool, and resource that
          helps customers to actively reduce their carbon footprint.'
          subtext='React, Node, Express, PostgreSQL'
        />
        <ContentCard 
          color='primaryOne'
          title='Mustang Media Group' 
          position='Web Developer'
          length='Nov ‘20 - Mar ‘21'
          content='Mustang Media Group oversees Cal Poly’s print and online news, as well as KCPR, the
          school‘s radio station.'
          subtext='React, Node, Express, MongoDB, Google Cloud, Wordpress'
        />
        <ContentCard 
          color='primaryOne'
          title='ShipOffers' 
          position='Integrated Logistics Support Specialist'
          length='Nov ‘19 - Present'
          content='Shipoffers is one of the top shipping and fulfillment companies, working
          primariliy with health and beauty products.'
          subtext='Python, PostgreSQL'
        />
      </ContentSection>
      <ContentSection title='About me' color='#8BCCDA' id='about'>
        <AboutMe/>
      </ContentSection>

      <ContentSection title='Where you can find me' color='#9F8BDA' id='contact'>
        <Links/>
      </ContentSection>

      <ContentSection title='Contact Me' color='var(--primaryOne)' id='contact'>
        <Contact/>
      </ContentSection>

    </Page>
  );
}

export default App;
